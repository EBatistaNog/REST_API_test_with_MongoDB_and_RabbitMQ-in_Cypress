// Teste de requisição POST na rota /users
describe('POST /users', () => {

  beforeEach(function () {
    cy.fixture('users').then(function (users) { // Carrega os dados do arquivo de fixtures antes de cada teste
      this.users = users; // Armazena os dados de usuários para uso nos testes
    });
  });

  it('registrar um novo usuário', function () {
    const user = this.users.create; // Obtém o usuário do arquivo de fixtures

    // Task com MongoDB: Vai ao banco de dados e remove o usuário
    cy.task('removeUser', user.email);

    cy.postUser(user)
      .then(response => {
        expect(response.status).to.eq(201); // Verifica se o status de resposta é 201 (Criado)
      });
  });

  it('email duplicado', function () {
    const user = this.users.dup_email;

    // Task com MongoDB: Vai ao banco de dados e remove o usuário
    cy.task('removeUser', user.email);

    cy.postUser(user); // Cria o usuário

    cy.postUser(user) // Tenta criar o usuário novamente
      .then(response => {
        const { message } = response.body; // Desestrutura o objeto da resposta

        expect(response.status).to.eq(409); // Verifica se o status é 409 (Conflito)
        expect(message).to.eq('Duplicated email!'); // Verifica a mensagem de erro
      });
  });

  context('campos obrigatórios', function () {
    let user;

    beforeEach(function () {
      user = this.users.required; // Define o usuário do arquivo de fixtures para testes de campos obrigatórios
    });

    it('nome é obrigatório', function () {
      delete user.name; // Remove o campo 'name' do objeto

      cy.postUser(user)
        .then(response => {
          const { message } = response.body; // Desestrutura a mensagem da resposta
          expect(response.status).to.eq(400); // Verifica se o status é 400 (Erro de validação)
          expect(message).to.eq('ValidationError: "name" is required'); // Verifica a mensagem de erro
        });
    });

    it('email é obrigatório', function () {
      delete user.email; // Remove o campo 'email' do objeto

      cy.postUser(user)
        .then(response => {
          const { message } = response.body; // Desestrutura a mensagem da resposta
          expect(response.status).to.eq(400); // Verifica se o status é 400 (Erro de validação)
          expect(message).to.eq('ValidationError: "email" is required'); // Verifica a mensagem de erro
        });
    });

    it('senha é obrigatória', function () {
      delete user.password; // Remove o campo 'password' do objeto

      cy.postUser(user)
        .then(response => {
          const { message } = response.body; // Desestrutura a mensagem da resposta
          expect(response.status).to.eq(400); // Verifica se o status é 400 (Erro de validação)
          expect(message).to.eq('ValidationError: "password" is required'); // Verifica a mensagem de erro
        });
    });
  });
});
