const express = require('express');
// const mysql = require('mysql');
const { createPool } = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())

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
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    const query = 'SELECT * FROM users WHERE email = ?';
    pool.query(query, [email], async (err, results) => {
        if (err) {
            return res.status(500).send({ message: 'Error logging in', error: err.message });
        }

        res.status(200).send({ message: 'Login successful'});
});
});

app.post('/signup', (req, res) => {
    const { fullname, email, password } = req.body;
    
    const query = 'INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)';
    pool.query(query, [fullname, email, password], (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Error signing up', error: err.message });
        }

        // Send a response back to the client
        res.status(200).send({ message: 'Signup successful'});
    });
});


app.listen(8081, () => {
    console.log("listening..");
})