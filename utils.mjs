import url from 'url'

export function getQueryParams(reqUrl) {
  return url.parse(reqUrl, true).query
}
