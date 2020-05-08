const express = require('express')
const session = require('express-session')
const bodyParser= require('body-parser');
const SERVER_PORT=process.env.PORT || 3000
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
//ROUTES WILL GO HERE
const path = require('path');
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

app.use('/images', require('./routes/images'));
var uploadRouter = require('./routes/upload');
app.use('/', uploadRouter);
app.listen(SERVER_PORT, () => console.log('http://localhost:3000/'));