
const express = require('express');
const session = require('express-session')
const SERVER_PORT=process.env.PORT || 3989
const path=require('path')
const app = express();

app.set('views', path.join(__dirname, 'views/'));
app.use((req, res, next) => {
    next()
})
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'something very very secret'
  }))
  
app.use(express.json())
app.use(express.urlencoded({extended: true}))
var uploadRouter = require('./routes/upload');
app.use('/', uploadRouter);

app.listen(SERVER_PORT, function () {
    console.log("Server started on http://localhost:3989/");
});
//taskkill/f /im node.exe