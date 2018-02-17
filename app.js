const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Times = require('./models/times');

const PORT = 3000;
const router = express.Router();

mongoose.connect('mongodb://127.0.0.1/api', (err) => {
  if (err) console.log('erro conexao com mongo: ', err);
});

router.get('/', (req, res) => {
  console.log('wellcome to my API :D');
  res.json({ nome: "teste" });
});

router.route('/times')
  .post((req, res) => {
    let times = new Times();
    times.nome = req.body.nome;

    times.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: `Time ${req.body.nome} cadastrado com sucesso!` });
    });
  });

app.use('/', router);

app.listen(PORT, console.log(`server rodando na porta ${PORT}`));