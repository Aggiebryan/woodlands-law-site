export function blogText(html: string): string {
  const named: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', hellip: '…', ndash: '–', mdash: '—', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”' };
  return html.replace(/<[^>]*>/g, '').replace(/&#(x[\da-f]+|\d+);|&([a-z]+);/gi, (entity, numeric: string, name: string) => {
    if (numeric) { const code = numeric[0].toLowerCase() === 'x' ? parseInt(numeric.slice(1), 16) : Number(numeric); return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity; }
    return named[name.toLowerCase()] ?? entity;
  }).trim();
}
