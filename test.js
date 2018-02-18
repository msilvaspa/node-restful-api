const assert = require('chai').assert;
const request = require('supertest');
const express = require('express');
const app = express();

describe('Testes de API', () => {
  const PREFIX = 'http://localhost:3000';
  describe(`${PREFIX}/api`, () => {

    it('deve receber objeto com nome "teste"', (done) => {
      const expected = { nome: 'teste' },
      expectedStatus = 200;

      return request(PREFIX)
        .get(`/api`)
        .end((err, res) => {
          console.log('err: ', err);
          console.log('status: ', res.status);
          // assert.equal(res.body, expected);
          assert.equal(res.status, expectedStatus);
        });
    });

  });

  describe(`${PREFIX}/api/times`, () => {

    it('deve consultar todos os times', () => {
      console.log('well done');
    });

    it('deve cadastrar time', () => {
      console.log('well done2');
    });

    it('deve consultar time por ID', () => {
      console.log('well done3');
    });

    it('deve alterar time por ID', () => {
      console.log('well done4');
    });

    it('deve excluir time por ID', () => {
      console.log('well done5');
    });

  });

});