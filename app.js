const express = require("express");
const path = require("path");


//Server config
const app = express();
const port = 8000;

app.listen(port, (req, res) => console.log("iniciando servidor en el puerto " + port))

//Middlewares
//app.use(express.static("public"));
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath) );

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//Require Routers
const indexRouter = require("./routers/indexRouter");
const newsRouter = require("./routers/newsRouter");
const museumRouter = require("./routers/museumRouter");

//Index Router
app.use("/", indexRouter);

//News Router
//app.use("/news", newsRouter);

//Museum tour Router
app.use("/museum", museumRouter);