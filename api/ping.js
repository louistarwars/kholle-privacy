// POST /api/ping { id, v } : l'appli Android signale qu'elle est utilisée, de façon anonyme.
// L'identifiant (aléatoire, sans lien avec la personne) n'est jamais conservé tel quel : il alimente
// des compteurs probabilistes (HyperLogLog) qui ne permettent que de savoir « combien », pas « qui ».
const store = require('./_store');

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const VERSION = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,6}$/;
const DAY = 86400;

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  try {
    if (req.method !== 'POST') return res.status(405).end();
    if (!store.enabled()) return res.status(204).end();
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body);
    const id = String((body && body.id) || '').toLowerCase();
    const v = String((body && body.v) || '');
    if (!UUID.test(id)) return res.status(400).end();

    const now = new Date();
    const iso = now.toISOString();
    const day = iso.slice(0, 10);
    const hour = iso.slice(0, 13);
    const cmds = [
      ['PFADD', 'u:all', id],
      ['PFADD', 'u:d:' + day, id],
      ['EXPIRE', 'u:d:' + day, 400 * DAY],
      ['PFADD', 'u:h:' + hour, id],
      ['EXPIRE', 'u:h:' + hour, 3 * DAY],
    ];
    if (VERSION.test(v)) cmds.push(['PFADD', 'u:v:' + v, id]);
    await store.pipeline(cmds);
    return res.status(204).end();
  } catch (e) {
    return res.status(204).end();
  }
};
