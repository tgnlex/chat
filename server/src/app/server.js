import express from 'express';
import HttpServer from './modules/http.js';
import plugins from './config/plugins.js';

const server = new HttpServer(express());
plugins.forEach((plug) => server.app.use(plug));

server.app.get('/', (req, res) => {
  res.sendFile('src/views/index.html');
});

export default server;
