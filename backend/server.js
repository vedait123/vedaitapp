const express = require('express');
// const mysql = require('mysql');
const { createPool } = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Beautiful19',
//     database: 'vedaitapp'
// })

const pool = createPool({
    host: 'localhost',
     user: 'root',
     password: 'Beautiful19',
     database: 'vedaitapp'
})

// pool.query(`select * from users`, (err, result, fields) =>{
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);    
// })

app.get('/', (req, res) => {
    return res.json("From backend");
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    pool.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening..");
})