const route = require('express').Router()
const path=require('path')
route.get('/', (req, res) => {
    var x='img2.png';
    res.sendFile(path.join(__dirname,'../public/uploads/'+x))
  
  })
  
exports=module.exports =route