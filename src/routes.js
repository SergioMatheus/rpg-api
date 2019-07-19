const expresse = require('express')
const routes = expresse.Router()

const UserController = require('./controllers/UserController')
const CharacterController = require('./controllers/CharacterController')

// Routes User
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

// Routes Character
routes.post('/characters', CharacterController.store)


module.exports = routes