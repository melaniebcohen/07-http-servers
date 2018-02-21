'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);

  if (req.method === 'GET' && req.url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello from my server!');
    res.end();
  }

  if (req.method === 'GET' && req.url.pathname === '/cowsay') {
    let params = req.url.query;
    if (params.text) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(cowsay.say({ text: params.text }));
      res.end();
    }
    if (!params.text) {
      res.writeHead(400, { 'Content-Type': 'text/plain' })
      res.write(cowsay.say({ text: 'bad request' }));
      res.end();
    }
  }

  if (req.method === 'POST' && req.url.pathname === '/cowsay') {
    parseBody(req.body.text, function(err) {
      if (err) throw new Error('this isnt working yo');
      res.writeHead(400, { 'Content-Type': 'text/plain' })
      res.write(cowsay.say({ text: req.body.text }));
      res.end();
    });
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})