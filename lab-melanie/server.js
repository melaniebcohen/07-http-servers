'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = ('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);

  if (req.method === 'GET' && req.url.pathname === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello from my server!');
    res.end();
  }

  // if (req.method === 'GET' && req.url.pathname === '/cowsay?text={message}') {
  //   console.log(req.url.pathname);
  //   if (req.url.query.text) {
  //     res.writeHead(200, {
  //       'Content-Type': 'text/plain'
  //     })
  //     res.write(cowsay.say({ text: 'yo' }));
  //     res.end();
  //   } else {
  //     console.log('nerp');
  //     res.end();
  //   }
  // }
});

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
