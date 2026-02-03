// Servidor de Estado y Control para la Web
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Variables globales para capturar la terminal
global.pairingCode = null;
global.botOption = null;
global.botPhone = null;

app.get('/status', (req, res) => {
  res.json({
    status: global.conn?.user ? 'online' : (global.botOption ? 'loading' : 'waiting_auth'),
    uptime: process.uptime(),
    users: Object.keys(global.db?.data?.users || {}).length,
    chats: Object.keys(global.db?.data?.chats || {}).length,
    pairingCode: global.pairingCode // El bot debe guardar aquí el código generado
  });
});

app.post('/pair', (req, res) => {
  const { option, phoneNumber } = req.body;
  global.botOption = option;
  global.botPhone = phoneNumber;
  res.json({ success: true });
});

app.listen(process.env.PORT || 3000, () => console.log("API de Consola Activa"));