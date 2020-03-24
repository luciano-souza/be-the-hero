//importando?
//importando o modulo chamado express pra variável express
const express = require('express');

const cors = require('cors');

//importando o routes que criamos
const routes = require('./routes'); //o ./ pra importar um arquivo

//Criando a aplicação
const app = express();

app.use(cors());

//Informando que vamos usar json no corpo das requisicoes
app.use(express.json());

//Dizendo que nossa app utiliza as rotas configuradas no arquivo routes
app.use(routes);



//Escutar a porta 3333
app.listen(3333);

