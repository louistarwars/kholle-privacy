// POST /api/count?id=<paquet> : +1 téléchargement, au plus une fois par jour et par visiteur.
const crypto = require('crypto');
const store = require('./_store');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  try {
    const id = String((req.query && req.query.id) || '');
    if (!store.enabled() || !/^[a-z0-9-]{1,80}$/.test(id)) return res.status(204).end();
    const ids = await store.catalogIds(req);
    if (!ids.includes(id)) return res.status(204).end();
    // Empreinte anonyme (irréversible) pour ne pas compter deux fois le même visiteur : conservée 24 h au plus.
    const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'inconnu';
    const day = new Date().toISOString().slice(0, 10);
    const fp = crypto.createHash('sha256').update(ip + '|' + id + '|' + day + '|' + (process.env.COUNT_SALT || 'kholle')).digest('hex').slice(0, 32);
    const first = await store.cmd(['SET', 'seen:' + fp, '1', 'NX', 'EX', '86400']);
    if (first) await store.cmd(['INCR', 'dl:' + id]);
    return res.status(204).end();
  } catch (e) {
    return res.status(204).end();
  }
};
