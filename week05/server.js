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
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(
          `<html maaa=a>
          <head>
            <style>
              body .aaa{
                width: 100px;
                height:100px
              }
              body img{
                width: 30px;
                background:red; iw
              }
            </style>
          </head>
          <body>
            <div class="aaa">
              <img width="100" />
            </div>
          </body>
        </html>`
        );
      });
  })
  .listen(8080);

console.log('server started');
