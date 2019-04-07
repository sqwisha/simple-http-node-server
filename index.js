const fs = require('fs');
const http = require('http');
const port = 3000;

const server = http.createServer(() => {
  fs.writeFile('./hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;
  });
}).listen(port, () => console.log(`listening on port ${port}`));
