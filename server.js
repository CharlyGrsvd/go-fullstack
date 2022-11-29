const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voici un nouveau message !');
});

server.listen(process.env.PORT || 3000);