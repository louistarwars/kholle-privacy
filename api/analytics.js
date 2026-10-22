// GET /api/analytics?days=30 avec l'en-tête « Authorization: Bearer <STATS_TOKEN> » : totaux par jour.
const crypto = require('crypto');
const store = require('./_store');

const same = (a, b) => {
  const x = crypto.createHash('sha256').update(String(a)).digest();
  const y = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(x, y);
};

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const secret = process.env.STATS_TOKEN;
  if (!secret || !store.enabled()) return res.status(503).json({ error: 'not_configured' });
  const given = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!given || !same(given, secret)) return res.status(401).json({ error: 'unauthorized' });
  try {
    const n = Math.max(1, Math.min(90, parseInt((req.query && req.query.days) || '30', 10) || 30));
    const days = [];
    for (let i = 0; i < n; i++) days.push(new Date(Date.now() - i * 86400000).toISOString().slice(0, 10));
    const rows = await store.pipeline(days.map((d) => ['HGETALL', 'a:' + d]));
    const out = days.map((d, i) => {
      const flat = rows[i] || [];
      const data = {};
      for (let k = 0; k < flat.length; k += 2) data[flat[k]] = Number(flat[k + 1]);
      return { day: d, data };
    });
    return res.status(200).json({ days: out });
  } catch (e) {
    return res.status(500).json({ error: 'server' });
  }
};
