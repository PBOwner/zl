export function formatRootUrl(route: string, src: string) {
  return `${route === '/' || route === '' ? '' : route}${encodeURI(src)}`
}