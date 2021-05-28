var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mysql = require('mysql');
const bodyParser = require("body-parser")


var users = require('./routes/users');
var healthOfficial = require('./routes/healthOfficial');
var venueOwner = require('./routes/venueOwner');
var managersRouter = require('./routes/managers');
var adminsRouter = require('./routes/admins');

// var dbConnectionPool = mysql.createPool({
//     host: 'localhost',
//     database: 'covid'
// });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(function(req, res, next) {
//     req.pool = dbConnectionPool;
//     next();
// });
// 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "My Secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.use('/user', users);
app.use('/venue-owner', venueOwner);
app.use('/health-official', healthOfficial);
app.use(express.static(path.join(__dirname, 'user')));

app.use('/manager', managersRouter);
app.use(express.static(path.join(__dirname, 'manager')));

app.use('/admin', adminsRouter);
app.use(express.static(path.join(__dirname, 'admin')));



// module.exports = app;

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`)
})
