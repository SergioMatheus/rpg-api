// Porta do servidor
const port = 3000

// Dependencias
const express = require('express')

// Inicialização do app
const app = express()

// Inicialização da rota principal
app.get('/', (req, res) => {
    res.send('Olá RPG!')
})

// Inicialização do servidor na porta 3000
app.listen(port, () => {
    console.log('Servidor da API inicializado')
})