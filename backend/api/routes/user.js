const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/signin', (req, res) => {
    console.log(req.body);
    const { userName, password } = req.body;
    mysqlConnection
        .query('SELECT * FROM user WHERE userName=? AND password=?',
        [userName, password],
        (error, rows, field) => {
            if(!error) {
                console.log(rows);
                if(rows.length > 0) {
                    let data = JSON.stringify(rows[0]);
                    const token = jwt.sign(data, 'stil');
                    res.json({ token });
                } else {
                    res.json('User incorrect or does not exists!');
                }
            } else {
                console.log(error);
            }
    });
});

router.post('/test', verifyToken, (req, res) => {
    res.json('teste');
});

function verifyToken(req, res, next) {
    if(!req.headers.authorization) return res.status(401).json('No authorized!');
    const token = req.headers.authorization.substr(7);
    if(token !== '') {
        const content = jwt.verify(token, 'stil');
        req.data = content;
        next();
    } else {
        res.status(401).json('Empty token!');
    }
}

module.exports = router;