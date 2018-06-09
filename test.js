const assert = require('chai').assert;
const request = require('supertest');
const express = require('express');
const chalk = require('chalk');
const randomize = require('randomatic');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const Times = require('./models/times');

const printErr = (err) => {
  const log = console.log;
  log(chalk.yellow.bgRed.bold(`${err}`));
};

describe('Testes de API: ', () => {
  const PREFIX = 'http://localhost:3000';

  let db;

  before(() => MongoClient.connect('mongodb://localhost:27017/api').then((_db) => db = _db));

  after(() => db.close());

  describe(`${PREFIX}/api: `, () => {

    it('Deve receber objeto com nome "teste"', () => {
      const expected = { nome: 'teste' };

      return request(PREFIX)
        .get(`/api`)
        .expect(200)
        .then((res, err) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, expected);
        })
        .catch((err) => printErr(err));
    });

  });

  describe(`${PREFIX}/api/times:`, () => {

    it('Deve consultar todos os times', () => {
      return request(PREFIX)
        .get('/api/times')
        .expect(200)
        .then(res => console.log(res.body))
        .catch((err) => printErr(err));
    });

    it('Deve cadastrar time', () => {
      const random = randomize('A', 15),
        expected = `Time ${random} cadastrado com sucesso!`;

      return request(PREFIX)
        .post('/api/times')
        .type('form')
        .send({ nome: `${random}` })
        .expect(200)
        .then((res) => assert.deepEqual(res.body.message, expected))
        .catch((err) => printErr(err));
    });

    it.only('Deve consultar time por ID', () => {
      const random = randomize('A', 15);
      let id;

      return request(PREFIX)
        .post('/api/times')
        .type('form')
        .send({ nome: `${random}` })
        .expect(200)
        .then(() => {
          return new Promise((resolve, reject) => {
            db.getCollection('times').find({ nome: `${random}` }).toArray(function (err, result) {
              if (err) reject(err);
              resolve(result);
            });
          });
        })
        .catch((err) => printErr(err));
    });

    it('Deve alterar time por ID', () => {
      console.log('well done4');
    });

    it('Deve excluir time por ID', () => {
      console.log('well done5');
    });

  });

});