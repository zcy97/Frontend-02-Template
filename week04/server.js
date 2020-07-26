const http = require('http');

http
  .createServer((request, response) => {
    let body = [];
    request
      .on('error', (err) => {
        console.log(err);
      })
      .on('data', (chunk) => {
        body.push(chunk); //List of Buffer or Uint8Array
      })
      .on('end', () => {
        body = Buffer.concat(body).toString(); //缓冲区
        console.log('body', body);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body>
            <div class="aaa">
              <img width="100" />
            </div>
          </body>
        </html>`);
      });
  })
  .listen(8080);

console.log('server started');
