const express = require('express')
const app = express()
app.use(express.json())

app.get('/oi', (req, res) => {
    res.send("Tudo certo.")
})

const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`));