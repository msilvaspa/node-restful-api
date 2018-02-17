const assert = require('chai');
const request = require('supertest');
const express = require('express');
const app = express();

describe('Testes de API', () => {

  describe('/api', () => {
    it.only('deve receber objeto com nome "teste"', () => {
      const expected = { nome: 'teste' };

      return request(app)
        .get('/api')
        .expect(200)
        .then((res, err) => {
          if(err){
            console.log(err);
          }
        });
    });
  });

  describe('/times', () => {

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