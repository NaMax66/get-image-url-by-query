import { createServer } from 'http'
import getUrlByString from './getUrlByString.mjs'
import { isGetImageRequest } from './requestValidator.mjs'
import { getQueryParams } from './utils.mjs'

import { PORT, DEFAULT_HEADERS } from './config.mjs'
import axios from 'axios'

const server = createServer(async (req, res) => {
  if (isGetImageRequest(req)) {
    const { query, lang } = getQueryParams(req.url)

    res.writeHead(200, DEFAULT_HEADERS)

    try {
      const { data } = await axios.get(getUrlByString(query, lang))
      res.write(data.hits[0].webformatURL)
    } catch (e) {
      console.log(e)
      res.write('no img available')
    } finally {
      res.end()
    }
  }
})

server.listen(PORT, 'localhost')
