const { defineConfig } = require("cypress");
const { connect } = require('./cypress/support/mongo');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      allureWriter(on, config); // Inicializa o plugin do Allure para relatórios

      // Conecta ao banco de dados MongoDB
      const db = await connect();

      // Define os listeners das tasks do Cypress para interação com o banco de dados
      on('task', {
        // Remove o usuário pelo email informado
        async removeUser(email) {
          const users = db.collection('users'); // Acessa a coleção 'users' do banco MongoDB
          await users.deleteMany({ email: email }); // Remove todos os registros com o email especificado
          return null;
        },
        // Remove a task pelo nome da task e email do usuário
        async removeTask(taskName, emailUser) {
          const users = db.collection('users'); // Acessa a coleção 'users'
          const user = users.findOne({ email: emailUser }); // Encontra o usuário pelo email
          const tasks = db.collection('tasks'); // Acessa a coleção 'tasks'
          await tasks.deleteMany({ name: taskName, user: user._id }); // Remove as tasks associadas ao usuário
          return null;
        },
        // Remove todas as tasks que contenham o termo especificado, pois você tem uma lista
        async removeTasksLike(key) {
          const tasks = db.collection('tasks'); // Acessa a coleção 'tasks'
          await tasks.deleteMany({ name: { $regex: key } }); // Remove as tasks que contêm a chave no nome
          return null;
        }
      });
      
      return config; // Retorna a configuração do Cypress atualizada
    },
    baseUrl: process.env.BASE_URL, // Define a URL base do ambiente
    video: false, // Desativa a gravação de vídeo durante os testes
    screenshotOnRunFailure: false, // Desativa a captura de tela em falhas de testes
    env: {
      allure: true // Habilita o uso do Allure para relatórios
    }
  }
});
