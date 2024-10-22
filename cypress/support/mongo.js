const { MongoClient } = require('mongodb'); // Importa a propriedade MongoClient diretamente do módulo 'mongodb'

require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const mongoUri = process.env.MONGO_URI;

const client = new MongoClient(mongoUri); // Cria uma conexão com o cluster no MongoDB

// Função para conectar ao banco de dados
async function connect() {
    await client.connect(); // Estabelece a conexão com o MongoDB
    return client.db('markdb'); // Retorna o banco de dados 'markdb'
}

// Função para desconectar do banco de dados
async function disconnect() {
    await client.disconnect(); // Fecha a conexão com o MongoDB
}

module.exports = { connect, disconnect }; // Exporta as funções para serem usadas no arquivo cypress.config.js
