Cypress.Commands.add('postUser', (user) => {
    cy.api({
        url: '/users',
        method: 'POST',
        body: user,
        failOnStatusCode: false // Configura para não falhar em status diferentes de 2xx ou 3xx
    }).then(response => {
        return response; // Retorna a resposta da requisição
    });
});

Cypress.Commands.add('postSession', (user) => {
    cy.api({
        url: '/sessions',
        method: 'POST',
        body: { email: user.email, password: user.password },
        failOnStatusCode: false
    }).then(response => {
        return response; // Retorna a resposta da requisição
    });
});

Cypress.Commands.add('postTask', (task, token) => {
    cy.api({
        url: '/tasks',
        method: 'POST',
        body: task,
        headers: {
            authorization: token // Inclui o token de autenticação no cabeçalho
        },
        failOnStatusCode: false
    }).then(response => {
        return response; // Retorna a resposta da requisição
    });
});

Cypress.Commands.add('getUniqueTask', (taskId, token) => {
    cy.api({
        url: '/tasks/' + taskId,
        method: 'GET',
        headers: {
            authorization: token
        },
        failOnStatusCode: false
    }).then(response => {
        return response; // Retorna a resposta da requisição
    });
});

Cypress.Commands.add('deleteTask', (taskId, token) => {
    cy.api({
        url: '/tasks/' + taskId,
        method: 'DELETE',
        headers: {
            authorization: token
        },
        failOnStatusCode: false
    }).then(response => {
        return response; // Retorna a resposta da requisição
    });
});

Cypress.Commands.add('getTasks', (token) => {
    cy.api({
        url: '/tasks',
        method: 'GET',
        headers: {
            authorization: token
        },
        failOnStatusCode: false
    }).then(response => {
        return response; // Retorna a resposta da requisição
    });
});

Cypress.Commands.add('putTaskDone', (taskId, token) => {
    cy.api({
        url: `/tasks/${taskId}/done`,
        method: 'PUT',
        headers: {
            authorization: token
        },
        failOnStatusCode: false
    }).then(response => {
        return response; // Retorna a resposta da requisição
    });
});
