const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Cadastra Dev
routes.post('/devs', DevController.store);
//Lista Devs
routes.get('/devs', DevController.index);
//Altera Dev
routes.put('/devs', DevController.update);
//Deleta Dev
routes.delete('/devs', DevController.destroy);

//Busca
routes.get('/search', SearchController.index);

module.exports = routes;