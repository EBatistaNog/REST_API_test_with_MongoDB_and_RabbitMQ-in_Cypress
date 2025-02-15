# Cypress API Testing Project

## Overview
This project demonstrates how to build an API testing framework using Cypress, with database integration, messaging queues, and authentication.

## Skills Learned
- Creating API tests with Cypress. (Done)
- Using **Custom Commands** for the service layer. (Done)
- Implementing **Cypress tasks** for database connections. (Done)
- Consuming APIs in a hardcore way (without Swagger). (Done)
- Testing HTTP requests (POST, GET, PUT, DELETE). (Done)
- Working with **fixtures** for requests and responses. (Done)
- Adding tokens to requests. (Done)
- Intercepting and validating data in the messaging queue.

## Project Structure
- **API**: Sends change notifications to RabbitMQ.
- **RabbitMQ**: Stores and manages these notifications in its queues.
- **Jaiminho**: Consumes the messages and triggers notification emails.
- **Ethereal**: Simulates email sending, allowing the verification of sent emails.

## Database
- Install the MongoDB package: `npm i mongodb`.
- The file `mongo.js` was created in the support folder for database connections.

## Displaying Request Results
- Install the plugin: `npm i cypress-plugin-api`.
