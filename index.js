// Porta do servidor
const port = 3000

// Dependencias
const express = require('express')
const requireDir = require('require-dir')

// Inicialização do app
const app = express()

// Iniciando o DB
require('./config/database.js')
requireDir('./src/models')

// Inicialização da rota principal
app.get('/', (req, res) => {
    res.send('Olá RPG!')
})

// Inicialização do servidor na porta 3000
app.listen(port, () => {
    console.log('Servidor da API inicializado')
})