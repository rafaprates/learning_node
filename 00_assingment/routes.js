const requestHandler = (req, res) => {
    const method = req.method;
    const url = req.url;

    if (url === "/"  && method === 'GET') {
        res.write('<html>');
        res.write('<h1>Welcome to /</h1>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users' && method === 'GET') {
        res.write('<html>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'GET') {
        res.write('<html>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="data">');
        res.write('<button type="submit" value="Submit">Enviar</submit>');
        res.write('</form>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            console.log("ended");
            console.log(body);
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/create-user');

        return res.end();
    }
}

module.exports = requestHandler;