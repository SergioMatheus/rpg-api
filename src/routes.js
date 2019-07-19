const expresse = require('express')
const routes = expresse.Router()

const UsuarioController = require('./controllers/UsuarioController')
const PersonagemController = require('./controllers/PersonagemController')

// Rotas Usuario
routes.get('/usuarios', UsuarioController.index)
routes.get('/usuarios/:id', UsuarioController.show)
routes.post('/usuarios', UsuarioController.store)
routes.put('/usuarios/:id', UsuarioController.update)
routes.delete('/usuarios/:id', UsuarioController.destroy)

// Rotas Personagem
routes.post('/personagens', PersonagemController.store)


module.exports = routes