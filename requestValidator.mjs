import { getQueryParams } from './utils.mjs'

export function isGetImageRequest(req) {
  const queryParams = getQueryParams(req.url)
  const url = req.url.slice(0, req.url.indexOf('?'))

  return req.method === 'GET' && url === '/get-img' && queryParams.query && queryParams.lang
}
