import { createRemoteJWKSet, jwtVerify } from 'jose';

export interface AccessEnv { ACCESS_TEAM_DOMAIN?: string; ACCESS_AUD?: string }
const keySets = new Map<string, ReturnType<typeof createRemoteJWKSet>>();
export async function isEditor(request: Request, env: AccessEnv): Promise<boolean> {
  if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD) return false;
  const issuer = `https://${env.ACCESS_TEAM_DOMAIN}`;
  if (!/^[a-z0-9-]+\.cloudflareaccess\.com$/.test(env.ACCESS_TEAM_DOMAIN)) return false;
  const token = request.headers.get('cf-access-jwt-assertion');
  if (!token) return false;
  try {
    let keys = keySets.get(issuer);
    if (!keys) { keys = createRemoteJWKSet(new URL(`${issuer}/cdn-cgi/access/certs`)); keySets.set(issuer, keys); }
    const { payload } = await jwtVerify(token, keys, { issuer, audience: env.ACCESS_AUD, algorithms: ['RS256'] });
    return typeof payload.email === 'string' && /^[^@\s]+@woodlands\.law$/i.test(payload.email);
  } catch { return false; }
}
