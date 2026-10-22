// POST /api/hit?p=<page>&r=<site d'origine>&u=<campagne> : une visite, comptée de façon anonyme.
// Pas de cookie, pas d'adresse IP conservée : seulement des totaux par jour et une empreinte
// irréversible (IP + navigateur + date) gardée 48 h pour compter les visiteurs uniques.
const crypto = require('crypto');
const store = require('./_store');

const PAGES = {
  '/': '/', '/index.html': '/',
  '/bibliotheque.html': '/bibliotheque.html',
  '/testeurs.html': '/testeurs.html',
  '/privacy.html': '/privacy.html',
};
const BOT = /bot|crawl|spider|slurp|preview|facebookexternalhit|headless|lighthouse|monitor|curl|wget|python|node-fetch|axios/i;
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 32);

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  try {
    if (!store.enabled()) return res.status(204).end();
    const q = req.query || {};
    const path = PAGES[String(q.p || '')];
    const ua = String(req.headers['user-agent'] || '');
    if (!path || !ua || BOT.test(ua)) return res.status(204).end();

    const day = new Date().toISOString().slice(0, 10);
    const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'inconnu';
    const fp = sha(ip + '|' + ua + '|' + day + '|' + (process.env.COUNT_SALT || 'kholle'));
    const [newVisitor, newOnPage] = await store.pipeline([
      ['SET', 'v:' + fp, '1', 'NX', 'EX', '172800'],
      ['SET', 'vp:' + sha(fp + '|' + path), '1', 'NX', 'EX', '172800'],
    ]);

    const key = 'a:' + day;
    const cmds = [['HINCRBY', key, 'pv', 1], ['HINCRBY', key, 'pv:' + path, 1]];
    if (newOnPage) cmds.push(['HINCRBY', key, 'uvp:' + path, 1]);
    if (newVisitor) {
      const utm = String(q.u || '').toLowerCase();
      let ref = String(q.r || '').toLowerCase().replace(/^www\./, '');
      let source = 'direct';
      if (/^[a-z0-9_-]{1,30}$/.test(utm)) source = 'campagne:' + utm;
      else if (/^[a-z0-9.-]{3,60}$/.test(ref)) source = ref;
      const cc = /^[A-Z]{2}$/.test(String(req.headers['x-vercel-ip-country'] || '')) ? req.headers['x-vercel-ip-country'] : 'XX';
      const device = /Mobi|Android|iPhone|iPad/i.test(ua) ? 'mobile' : 'ordinateur';
      cmds.push(['HINCRBY', key, 'uv', 1], ['HINCRBY', key, 'src:' + source, 1], ['HINCRBY', key, 'cc:' + cc, 1], ['HINCRBY', key, 'dev:' + device, 1]);
    }
    cmds.push(['EXPIRE', key, 34000000]);
    await store.pipeline(cmds);
    return res.status(204).end();
  } catch (e) {
    return res.status(204).end();
  }
};
