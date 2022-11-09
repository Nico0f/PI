/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: "description",
  platforms: ["PC", "PS3"],
};

const genre = {
  genre_name: 'First Person',
  games: ["Battlefield V"],
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});

describe('Genres routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Genre.sync({ force: true })
    .then(() => Genre.create(genre)));
  describe('GET /genres', () => {
    it('should get 200', () =>
      agent.get('/genre').expect(200)
    );
  });
});