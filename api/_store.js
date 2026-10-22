// Petit client pour la base Redis (Upstash) branchée au projet Vercel.
// Sans base configurée, tout reste silencieux : le site marche, il n'affiche simplement pas de compteur.
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';

exports.enabled = () => Boolean(URL_ && TOKEN);

exports.cmd = async (command) => {
  const r = await fetch(URL_, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  });
  if (!r.ok) throw new Error('store ' + r.status);
  const j = await r.json();
  return j.result;
};

// Plusieurs commandes en une seule requête.
exports.pipeline = async (commands) => {
  const r = await fetch(URL_ + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  });
  if (!r.ok) throw new Error('store ' + r.status);
  const j = await r.json();
  return j.map((x) => x.result);
};

// Identifiants de paquets valides : ceux du catalogue publié avec le site.
exports.catalogIds = async (req) => {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const r = await fetch(proto + '://' + host + '/packs/catalog.json');
  if (!r.ok) throw new Error('catalog ' + r.status);
  const list = await r.json();
  return list.map((p) => p.id).filter((id) => /^[a-z0-9-]{1,80}$/.test(id));
};
