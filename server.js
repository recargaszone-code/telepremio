const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// Servir assets estáticos
app.use(express.static(path.join(__dirname)));

// SPA fallback: todas as rotas caem no index.html (BrowserRouter)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  TELE PRÊMIO Clone rodando em: http://localhost:${PORT}\n`);
});
