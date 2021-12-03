// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');
const adopterRouter = require("./adopters/adopters-router.js")
const dogRouter = require("./dogs/dog-router.js")
const server = express();

server.use(express.json());
server.use("/api/adopters",adopterRouter)
server.use("/api/dogs", dogRouter)
// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;
