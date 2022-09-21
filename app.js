//***** Require´s  *****/
const express = require("express");
const path = require("path");
const morgan = require('morgan');
const methodOverride = require('method-override');
const createError = require('http-errors');
const session = require('express-session');

//***** Server initialization  *****/
const app = express();

//***** Server configuration  *****/
app.set('port', 8000);
app.set('secret', 'Messi2022');

//***** Middlewares  *****/
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(session({ secret: app.get('secret') }));

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
const errorRouter = require("./routers/errorRouter");
const { urlencoded } = require("express");


//***** Template engine *****/
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

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
app.use("/sponsors", sponsorRouter);

//***** error 404 router  *****/
app.use("/404", errorRouter);


//***** Running up server  *****/
app.listen(app.get('port'), () => console.log(`Server up & running in port ${app.get('port')}`));


// ** catch 404 and forward to error handler **
app.use((req, res, next) => next(createError(404)));

// ** error handler **
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});