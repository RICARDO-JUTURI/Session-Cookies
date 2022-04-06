const express = require('express');
const path = require('path');
const app = express();

/* ENRUTADORES */
const mainRouter = require('./routes/main');

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

/* Middlewares */
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* Rutas */
app.use('/', mainRouter);

const PORT = 3010
app.listen(PORT, () => console.log(
    `
        Puerto levantado
        http://localhost:${PORT}
    `
))