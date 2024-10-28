const http = require('http');
const urlModule = require('url');
const path = require('path');
const fs = require('fs');
const { readFileSync } = require('node:fs');
const { convertLength, convertTemperature, convertWeight } = require('./utils/conversions');

const lengthPage = readFileSync('./views/length.html');
const weightPage = readFileSync('./views/weight.html');
const temperaturePage = readFileSync('./views/temperature.html');

http.createServer(function(req, res) {
    const url = req.url;
    const parsedUrl = urlModule.parse(url);
    const search = new URLSearchParams(parsedUrl.search);
    const value = parseFloat(search.get('value'));
    const fromType = search.get('unitFrom');
    const toType = search.get('unitTo');
    let output = "";

    if(url == '/' || url == '/length.html') {
        res.end(lengthPage);
    } else if(url == '/weight.html') {
        res.end(weightPage);
    } else if(url == '/temperature.html') {
        res.end(temperaturePage);
    } else if(parsedUrl.pathname == '/convertWeight') {
        output = convertWeight(fromType, toType, value);
        res.end(output)
    } else if(parsedUrl.pathname == '/convertLength') {
        output = convertLength(fromType, toType, value);
        res.end(output);
    } else if(parsedUrl.pathname == '/convertTemperature') {
        output = convertTemperature(fromType, toType, value);
        res.end(output)
    } else if (req.url === '/public/js/script.js' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'public','js', 'script.js');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(content);
            }}
        );
    } else if (req.url === '/public/css/style.css' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'public', 'css', 'style.css');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(content);
            }}
        );
    }
}).listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

