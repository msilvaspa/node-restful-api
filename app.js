const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log('wellcome to my API :D');
  res.json({ nome: "teste" });
});
app.listen(PORT, console.log(`server rodando na porta ${PORT}`));