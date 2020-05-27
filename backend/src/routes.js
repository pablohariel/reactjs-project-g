const express = require('express');
const routes = express.Router();

const GameController = require('./controllers/GameController');

routes.get('/games', GameController.index);
routes.post('/games', GameController.create);
routes.post('/gamesfromapi', GameController.createFromApi);
routes.put('/games/:id', GameController.update);
routes.delete('/games/:id', GameController.delete);

module.exports = routes;