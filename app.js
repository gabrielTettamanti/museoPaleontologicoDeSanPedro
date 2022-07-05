//***** Require´s  *****/
const express = require("express");
const path = require("path");
const morgan = require('morgan');

//***** Server initialization  *****/
const app = express();

//***** Server configuration  *****/
app.set('port', 8000);

//***** Running up server  *****/
app.listen(app.get('port'), () => console.log(`Server up & running in port ${app.get('port')}`));

//***** Middlewares  *****/
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

//***** Template engine *****/
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//***** Routes System configuration  *****/
const indexRouter = require("./routers/indexRouter");
const newsRouter = require("./routers/newsRouter");
const museumRouter = require("./routers/museumRouter");
const adminRouter = require("./routers/adminRouter");
const { urlencoded } = require("express");

//***** Index Router  *****/
app.use("/", indexRouter);

//***** News Router  *****/
app.use("/news", newsRouter);

//***** Museum tour router  *****/
app.use("/museum", museumRouter);

//***** Admin router  *****/
app.use("/admin", adminRouter);