const http = require('http');
const fs = require('fs');
const path = require('path');
const parse = require('querystring');

const publicDir = path.join(_dirname, 'public');
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        const filePath = req.url === '/'?'/index.html': req.url;
        const fullPath = path.join(publicDir, filePath);
fs.readFile(fullPath, (err, content) => {
    const ext = path.extname(fullPath);
    const contentType = ext === '.css' ? 'text/css':
            ext === '.js' ? 'text/javascript':
            ext === '.html' ? 'text/html':'text/plain';
    res.writeHead(200, { 'content-type':contentType });
        res.end(content);
   });
}
});

server.listen(port,() => console.log('server reunning at 
http://localhost:${port}`));