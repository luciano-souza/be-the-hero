//importando o modulo chamado express pra variável express
const express = require('express');

//desacoplando o modulo de rotas do express em uma variavel
const routes = express.Router();

//Validacao
const { celebrate, Segments, Joi } = require('celebrate');

//Importando os controladores
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/**
 * Rotas
 */
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }),
}), OngController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), ProfileController.index);
/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP
 * Get: buscar/listar uma informação do backend
 * Post: criar uma informação no backend
 * Put: alterar uma informação no backend
 * Delete: deletar uma informação no backend
 */

/**
 * Tipos de Parametros
 * 
 * Query params: Parametros nomeados enviados na rota após o ? (filtros, paginacao)
 * Route params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
//  routes.post('/users', (request, response) => {
//     //Todos os parametros que vem atraves do query
//     ///users?name=Luciano (no insominia)
//     // const qParams = request.query;
//     // console.log(qParams);

//     //Route params
//     ///users/:id (no get aqui do app)
//     // const rParams = request.params;
//     // console.log(rParams);

//     //Request body
//     const body = request.body;
//     console.log(body);

//     return response.json({
//         evento: 'Oi Luciano',
//         aluno: 'Luciano'
//     });
// });



//???
module.exports = routes;