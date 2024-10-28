# Cypress API Testing Project

## Overview
Este projeto demonstra como construir um framework de testes de API usando Cypress, com integração de banco de dados, filas de mensageria e autenticação.

## Skills Aprendidas
- Criar testes de API com Cypress. (Done)
- Utilizar **Custom Commands** para camada de serviços. (Done)
- Implementar **tasks do Cypress** para conexão com bancos de dados. (Done)
- Consumir APIs de forma hardcore (sem Swagger). (Done)
- Testar requisições HTTP (POST, GET, PUT, DELETE). (Done)
- Trabalhar com **fixtures** para requests e responses. (Done)
- Adicionar tokens em requisições. (Done)
- Interceptação e validação de dados na fila de mensageria 

## Project Structure
- **API**: Gerencia tarefas e notifica mudanças.
- **RabbitMQ**: Recebe notificações das tarefas.
- **Jaiminho**: Serviço que dispara e-mails a partir das mensagens no RabbitMQ.
- **Ethereal**: Simula o envio e visualização de e-mails.

## Banco de Dados
- Instale o pacote MongoDB: `npm i mongodb`.
- Arquivo `mongo.js` criado na pasta de suporte para conexão ao banco.

## Mostrar Resultados das Requisições
- Instale o plugin: `npm i cypress-plugin-api`.
