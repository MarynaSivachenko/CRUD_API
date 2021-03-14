const express = require("express");
    const bodyParser = require("body-parser");
    
    const app = express();
    const mysql = require("mysql");
  const {connection} = require("app/config/db.config.js");
  
  // создаем соединение с нашей базой данных
  const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });
  
  // открываем наше соединение с базой данных
  connection.connect(err => {
    if (err) throw error;
    console.log("успешно соединено с базой данных");
  });

  module.exports = connection;
   //экспортируем наше соединение
    //делаем наш парсинг в формате json
    app.use(bodyParser.json());
    
    // парсит запросы по типу: application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    
    //  простой response - request
    app.get("/", (req, res) => {
      res.json({ message: "Это стартовая страница нашего приложения" });
    });
    
    // установить порт, и слушать запросы
    app.listen(3001, () => {
      console.log("Сервер запущен на 3001 порту");
    });

    

    