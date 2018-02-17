const assert = require('chai');
const request = require('supertest');
const app = require('./app');

describe('Testes de API', () => {

  describe('/', () => {
    it('deve exibir no console as boas vindas', () => {
      console.log('well done');
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