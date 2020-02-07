const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-uapwb.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros
//Query Params: request.query (Filtros, Ordenação ou Paginação)
//Route Params: request.params (Identificar Recursos na Alteração ou Exclusão) 
//Body: request.body (Dados para a criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.listen(3333);
