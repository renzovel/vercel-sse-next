// Importa express
const express = require('express');
const http = require('http');
const path = require('path');

// Crea una aplicación express y un servidor HTTP
const app = express();
const server = http.createServer(app);

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para SSE
app.get('/', (req, res) => {
  // Configuración de cabeceras para SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Enviar datos al cliente cada 1 segundo
  const intervalId = setInterval(() => {
    const data = new Date().toLocaleTimeString();
    res.write(`data: ${data}\n\n`);
  }, 1000);

  // Manejar cierre de conexión
  req.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
});

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor
server.listen(PORT, () => {
  console.log(`Servidor SSE escuchando en http://localhost:${PORT}`);
});
