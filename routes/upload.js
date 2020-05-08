var express = require('express');
var router = express.Router();
var multer  = require('multer');
const Imgs = require('../db').Imgs
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'shankygupta79',
  api_key: '175733266462221',
  api_secret: 'XBOB1qBeiw_ZMWxQvw2UyFyBzYg'
});
var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
    //DATE to make it Unique
  }
})

const fileFilter=(req, file, cb)=>{
 if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
     cb(null,true);
 }else{
     cb(null, false);
 }

}
var upload = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
 });

 
router.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
 
});
var link='';
router.get('/url',(req,res)=>{
  res.json({url:link})
  
})
router.post("/fileupload",upload.single('image'),function(req,res,next){
const filename=req.file.filename;
cloudinary.v2.uploader.upload(req.file.path, 
      function(error, result) {console.log(result.url, error)
        link=result.url;
        console.log("Hi");
        console.log(link);
        return res.redirect('https://image-up1.herokuapp.com/');
      });
});
 
 
module.exports=router;