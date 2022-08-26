require("dotenv").config();
require("@babel/register");
const ws = require("ws");
const ReactDOMServer = require("react-dom/server");
const React = require("react");

const express = require("express");
// const session = require('express-session');

const app = express();
const { PORT, SESSION_SECRET } = process.env;
const logger = require("morgan");
const path = require("path");

// //!!!!routes
const mainRouter = require("./src/routes/main");

// const FileStore = require('session-file-store')(session);

//!!!!!!!middlewares
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//!!cookie session прописать
// const sessionConfig = {
//   name: 'theUserEmail', // * Название куки
//   store: new FileStore(), // * подключение стора (БД для куки) для хранения
//   secret: SESSION_SECRET ?? 'shamil', // * ключ для шифрования куки
//   resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
//   saveUninitialized: false, // * Если false, куки появляются только при установке req.session
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
//     httpOnly: true, // * куки только по http
//   },
// };

// app.use(session(sessionConfig));
// //!!!!!!!!!!!!!! app.use()
app.use("/", mainRouter);

// app.listen(PORT, () => {
//   console.log(`server started PORT: ${PORT}`);
// });
// * 2 - Присвоение подключения к переменной
const httpServer = app.listen(PORT ?? 3100, () => {
  console.log("Сервер запущен!");
});

const wsServer = new ws.WebSocketServer({ server: httpServer });

wsServer.on("connection", (client) => {

  client.on("message", (data) => {
    // * 8 раскодировать пришедшее с клиента сообщение
    const utfData = JSON.parse(data.toString("utf8"));
    // * 17.1 создаём новый ключ в utfData и передаём туда количество подключенных юзеров
    utfData.clientsSize = wsServer.clients.size;
    console.log(utfData);
    // * 18 отправляем готовый объект в виде строки на клиент
    // * 19 отправка сообщения ОТ конкретного клиента
    wsServer.clients.forEach((currentClient) => {
      currentClient.send(JSON.stringify(utfData));
    });
    // * 20 см. в chat.js
    // * 9 cм. в chat.js
  });
});
