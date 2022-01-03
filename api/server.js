const express = require('express');

const server = express();

const adoptersRouter = require('./adopters/adopters-router');
const dogsRouter = require('./dogs/dogs-router');

server.use(express.json());

server.use('/api/adopters', adoptersRouter);
server.use('/api/dogs', dogsRouter);

// OTHER ENDPOINTS
server.use('*', (req, res) => {
  res.status(404).send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;
