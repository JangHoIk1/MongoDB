var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dotenv = require('dotenv');

// .env피일 읽고 환경설정
dotenv.config();
// process.env (프로세스 환경변수)에
// path에 해당하는 .env 파일 읽고 config
// dotenv.config({path: '.env});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const birdRouter = require('./routes/birds');
// const birdsRouter = require('./routes/birds');
// const birds_aboutRouter = require('./routes/birds/about');

const mongoose = require('mongoose');

console.log(process.env.MONGO_URI);
mongoose.connect(
  process.env.MONGO_URI
)
  .then(() => console.log("Connected Successful"))
  .catch(err => console.log("MonogoDB Connection Error"));
var app = express();


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/board', boardRouter);
app.use('/birds', birdRouter);
// app.use('/birds/about', birds_aboutRouter);


app.get('/', function (req, res) {
  res.send('Hellow World');
});


app.get('/birds/about', (req, res) => {
  res.send("Last Birds");
});

app.post("/", function (req, res) {
  res.send("Post request가 왔습니다.");
})


app.use(logger("dev"));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
