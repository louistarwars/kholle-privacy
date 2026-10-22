// GET /api/stats : { "<paquet>": nombre de téléchargements, ... } (vide si la base n'est pas configurée).
const store = require('./_store');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  try {
    if (!store.enabled()) return res.status(200).json({});
    const ids = await store.catalogIds(req);
    if (!ids.length) return res.status(200).json({});
    const values = await store.cmd(['MGET', ...ids.map((id) => 'dl:' + id)]);
    const out = {};
    ids.forEach((id, i) => { out[id] = Number(values[i] || 0); });
    return res.status(200).json(out);
  } catch (e) {
    return res.status(200).json({});
  }
};
