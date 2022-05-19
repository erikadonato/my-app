const express = require('express');
const routes = express.Router()

const ListPasswordController = require('./controllers/ListPasswordController')
const AddPasswordController = require('./controllers/AddPasswordController')
const EditPasswordController = require('./controllers/EditPasswordController')
const DeletePasswordController = require('./controllers/DeletePasswordController') 

routes
    .get('/list-password', ListPasswordController.index)
    .post('/add-password', AddPasswordController.index)
    .put('/edit-password', EditPasswordController.index)
    .delete('/delete-password/:id', DeletePasswordController.index)

module.exports= routes