const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('logger').createLogger();
const app = express();
const Times = require('./models/times');

module.exports = app;

mongoose.connect('mongodb://127.0.0.1/api', (err) => {
  if (err) console.log('erro conexao com mongo: ', err);
});

app.use(bodyParser());

const PORT = 3000;

const router = express.Router();

router.get('/', (req, res) => {
  logger.info('Rota principal OK');
  console.log('wellcome to my API :D');
  res.json({ nome: "teste" });
});

router.route('/times')
  .get((req, res) => {
    logger.info('Chamada de API de consulta');
    Times.find((err, dados) => {
      if (err) {
        res.send(err);
      }
      res.json(dados);
    });
  })
  .post((req, res) => {
    logger.info('Chamada de API de cadastro');
    let times = new Times();
    times.nome = req.body.nome;

    times.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: `Time ${req.body.nome} cadastrado com sucesso!` });
    });
  });

router.route('/times/:id')
.get((req, res) => {
  logger.info('Chamada de API de consulta por ID');
  Times.findById(req.params.id, (err, dados) => {
    if(err){
      res.send(err);
    }
    res.json(dados);
  });
})

.put((req, res) => {
  logger.info('Chamada de API de alteração de time');
  Times.findById(req.params.id, (err, dados) => {
    if(err){
      res.send(err);
    }
    dados.nome = req.body.nome;
    dados.save((err) => {
      if(err){
        res.send(err);
      }
      res.json({message: `Time id ${req.params.id} atualizado com sucesso para ${req.body.nome}`});
    });
  });
})

.delete((req, res) => {
  logger.info('Chamada de API de exclusão de time');
  Times.remove({_id: req.params.id}, (err, dados) => {
    if(err){
      res.send(err);
    }
    res.json({message: `Time id ${req.params.id} excluído com sucesso!`});
  });
});

app.use('/api', router);

app.listen(PORT, console.log(`server rodando na porta ${PORT}`));