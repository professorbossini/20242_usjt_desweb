const express = require('express')
const mysql = require('mysql2')
const app = express()
app.use(express.json())

app.get('/oi', (req, res) => {
    res.send("Tudo certo.")
})

app.get('/medicos', (req, res) => {
    obterConexao().query('SELECT * FROM tb_medico', (err, results, fields) => {
        res.json(results);
    })
})

app.post('/medicos', (req, res) => {
    const medico = req.body
    obterConexao().query('INSERT INTO tb_medico (crm, nome) values (?, ?)',
        [medico.crm, medico.nome], (err, results, fields) => {
            res.status(201).send(medico)
        })
})

app.get('/pacientes', (req, res) => {
    obterConexao().query('SELECT * FROM tb_paciente', (err, results, fields) => {
        res.json(results);
    })
})

function obterConexao() {
    return mysql.createConnection({
        host: '',
        port: 12621,
        user: '',
        database: '',
        password: ''
    });
}

const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`));