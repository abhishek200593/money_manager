const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'expenses'  
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/expenses', (req, res) => {
    let sql = "SELECT * FROM expenses";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send({ results: results })
    })
})

app.post('/expenses/save', (req,res) => {
    let data = {expense_for: req.body.expense_for, expense_amount: req.body.expense_amount, note: req.body.note}
    let sql = "INSERT INTO expenses SET?";
    let query = conn.query(sql, data, (err, results) => {
        if(err) throw err;
        res.send({ status: 400 });
    })
})

app.get('/expenses/edit/:id', (req, res) => {
    let id = req.params.id;
    let sql = "SELECT * FROM expenses WHERE id = '" + id + "'";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send({ results: results })
    })
})

app.post('/expenses/update', (req, res) => {
    let sql = "UPDATE expenses SET expense_for = '" + req.body.expense_for + "', expense_amount = '" + req.body.expense_amount + "', note = '" + req.body.note + "' WHERE id = '" + req.body.id + "'";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send({ status: 400 });
    });
})

app.get('/expenses/delete/:id', (req, res) => {
    let id = req.params.id;
    let sql = "UPDATE expenses SET flg_delete = 1 WHERE id = '" + id + "'";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send({status: 400});
    });
})

app.listen(4000, () => {
    console.log('Server is running at port 8000');
});