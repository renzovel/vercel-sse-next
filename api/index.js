const app = require('express')();

app.get('/api', (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection","keep-alive");
    res.end(`Hello! Go to item:----------------`);


    


});
  
module.exports = app;