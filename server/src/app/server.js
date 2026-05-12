import expreszs from 'express';
import HttpServer from '../modules/http.js';

const server = new HttpServer(express());

server.app.get('/', (req, res) => {
  res.send('<h1>wllo World./h1>')
});

export default server;
