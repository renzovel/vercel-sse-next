const app = require('express')();

app.get('/api', (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection","keep-alive");

    //setInterval(() => {
        const data = { mensaje: 'Hola desde el servidor' };
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    //}, 2000);
});
  
module.exports = app;