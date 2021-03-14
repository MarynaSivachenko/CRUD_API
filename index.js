const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const mysql = require('mysql');

const config = require('./config/db.config');

// создаем соединение с нашей базой данных
const connection = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
});

// открываем наше соединение с базой данных
connection.connect(err => {
    if (err) {
        console.log('Error occurred while connecting db', err);
    } else {
        console.log('Successfully connected to db');
    }
});

//экспортируем наше соединение
//делаем наш парсинг в формате json
app.use(bodyParser.json());

// парсит запросы по типу: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//  простой response - request
app.get('/', (req, res) => {
    res.json({
        message: 'Start page of the application'
    });
});

// установить порт, и слушать запросы
app.listen(3001, () => {
    console.log('Сервер запущен на 3001 порту');
});
