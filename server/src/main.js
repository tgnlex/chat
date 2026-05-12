import expreszs from 'express';
import HttpServer from './modules/http.js';

const server = new HttpServer(express());

server.app.get('/', (req, res) => {
  res.send('<h1>wllo World./h1>')
});

function main() {
  server.http.listen(3000, () => {
    console.info('[MAIN]: Server listening on *:3000')
  })
}
