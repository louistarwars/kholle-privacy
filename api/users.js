// GET /api/users : nombre d'appareils qui utilisent l'appli (public, uniquement des totaux).
const store = require('./_store');

const hours = (n) => {
  const out = [];
  for (let i = 0; i < n; i++) out.push('u:h:' + new Date(Date.now() - i * 3600000).toISOString().slice(0, 13));
  return out;
};
const days = (n) => {
  const out = [];
  for (let i = 0; i < n; i++) out.push('u:d:' + new Date(Date.now() - i * 86400000).toISOString().slice(0, 10));
  return out;
};

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'public, s-maxage=20, stale-while-revalidate=60');
  if (!store.enabled()) return res.status(503).json({ error: 'not_configured' });
  try {
    const [h1, h24, w, m, total] = await store.pipeline([
      ['PFCOUNT', ...hours(1)],
      ['PFCOUNT', ...hours(24)],
      ['PFCOUNT', ...days(7)],
      ['PFCOUNT', ...days(30)],
      ['PFCOUNT', 'u:all'],
    ]);
    return res.status(200).json({ lastHour: h1 || 0, last24h: h24 || 0, week: w || 0, month: m || 0, total: total || 0 });
  } catch (e) {
    return res.status(500).json({ error: 'server' });
  }
};
