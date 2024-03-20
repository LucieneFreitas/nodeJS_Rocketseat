import http from 'node:http'

const server = http.createServer((request, response) => {
  return response.end('tudo')
})

server.listen(3333)


