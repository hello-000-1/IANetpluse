const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Permitir que tu página web acceda a los datos del bot
app.use(cors());

// Ruta que la web consultará
app.get('/status', (req, res) => {
  res.json({
    online: true,
    uptime: process.uptime(),
    timestamp: Date.now(),
    botName: "IANetPluse Core"
  });
});

app.listen(port, () => {
  console.log(`API de estado operativa en puerto ${port}`);
});