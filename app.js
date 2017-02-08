const express = require('express'),
      app = express(),
      port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    // Respond with the ip address, the first language, and parse the user-agent header to get the operating system details
    res.json({
        ipaddress: req.ip,
        language: req.acceptsLanguages()[0],
        os: req.headers['user-agent'].split(/[()]/)[1].slice(0, -1)
    });
});

app.listen(port);