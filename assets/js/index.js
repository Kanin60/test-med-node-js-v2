import http from 'http';

http.createServer((request, response) => {
    console.log('Serveren kører på http://localhost:4000');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World!');
    response.end();
}).listen(4000)
