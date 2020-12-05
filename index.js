const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('www.fakeserver.key'),
    cert: fs.readFileSync('www.fakeserver.local.crt'),
    passphrase: '1234'
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(8000);