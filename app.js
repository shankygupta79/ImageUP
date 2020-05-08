const express = require('express')
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
//ROUTES WILL GO HERE
const path = require('path');

app.use('/images', require('./routes/images'));
var uploadRouter = require('./routes/upload');
app.use('/', uploadRouter);
app.listen(3000, () => console.log('http://localhost:3000/'));