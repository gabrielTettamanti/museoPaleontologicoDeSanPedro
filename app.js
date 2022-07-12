//***** Require´s  *****/
const express = require("express");
const path = require("path");
const morgan = require('morgan');
const methodOverride = require('method-override');

//***** Server initialization  *****/
const app = express();

//***** Server configuration  *****/
app.set('port', 8000);

//***** Middlewares  *****/
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

//***** Template engine *****/
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//***** Routes System configuration  *****/
const indexRouter = require("./routers/indexRouter");
const newsRouter = require("./routers/newsRouter");
const museumRouter = require("./routers/museumRouter");
const adminRouter = require("./routers/adminRouter");
const sponsorRouter = require("./routers/sponsorRouter");
const subsRouter = require('./routers/subscriberRouter');
const { urlencoded } = require("express");


//***** Template engine *****/
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Para los formulatios POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Para los formularios PUT y DELETE
app.use(methodOverride('_method'));

//***** Middlewares  *****/
//const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath));
app.use(morgan('dev'));


//***** Index Router  *****/
app.use("/", indexRouter);

//***** News Router  *****/
app.use("/news", newsRouter);

//***** Museum tour router  *****/
app.use("/museum", museumRouter);

//***** Admin router  *****/
app.use("/admin", adminRouter);

app.use('/subs', subsRouter);

//***** Sponsor router  *****/
app.use("/admin/sponsors", sponsorRouter);


//***** Running up server  *****/
app.listen(app.get('port'), () => console.log(`Server up & running in port ${app.get('port')}`));