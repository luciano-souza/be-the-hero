//Importando o crypto pra fazer a chave primaria de ong
const crypto = require('crypto');


module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}