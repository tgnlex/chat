import http from 'http';

class HttpServer {
  app = {};
  http = {};
  constructor(app) {
    this.app = app;
    this.http = http.createServer(app);
  }
}

export default HttpServer;
