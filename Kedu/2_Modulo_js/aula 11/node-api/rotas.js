const express = require('express');
const Route = express();
const userController = require('./controladores');
const middlewares = require('./middlewares');
const cors = require("cors");
Route.use(cors());

Route.use(express.json());
Route.listen(80, () => console.log('Rodando na porta 80'));

Route.get('/api', userController.getUsers);
Route.get('/api/:id', userController.getUser);
Route.post('/api', middlewares.hasError, userController.createUser);
Route.put('/api/:id', userController.updateUser);
Route.delete('/api/:id', userController.deleteUser);