# Survey API

## Description

Simple node.js server that fetches survey questions and submits survey answers. Postman collection is included in the root directory.

## Database

Firebase was used to save and read data.

## Starting up

Start the server localy by running `npm install` then `npm start` or `node server.js` from the project root directory.

## Routes
- getSurvey GET: /api/v1/survey
- submitAnswers POST: /api/v1/survey/:id/answers

### getSurvey
Fetches survey information

Status codes:
- 200
- 500

### submitAnswers
Submits answers to the survey 

Status codes:
- 201
- 422
- 500
