// Porta do servidor
const port = 3000

// Dependencias
const express = require('express')
const requireDir = require('require-dir')
const mongoose = require('mongoose')

// Inicialização do app
const app = express()
app.use(express.json())

// Iniciando o DB
require('./config/database.js')
requireDir('./src/models/game')

// Rotas
app.use('/api', require('./src/routes'))

// Inicialização do servidor na porta 3000
app.listen(port, () => {
    console.log('Servidor da API inicializado')
})