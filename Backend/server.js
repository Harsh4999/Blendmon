const express = require('express');
const youtube = require('./youtube');
// const bodyparser = require('body-parser')
const path=require('path')

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, '../Public')));
console.log(__dirname+'/../Public');
const PORT=5000;
//app.use(bodyparser.urlencoded());
app.get('/',(req,res,next)=>{
  res.render('index');
  // res.render('index')  
 // next();
});
app.get('/you',(req,res,next)=>{
   res.render('youtube');
})
app.get('/youtube',async (req,res,next)=>{
  // const songName = req.params.name;
  console.log(req.query);
  var type;
  if(req.query.audio!=null){
   type='audio';
  }else{
   type='video';
  }
  console.log(type);
   const url=req.query.fname;
   //console.log(req)
  console.log(url);
   await youtube.video(req.query.fname,type).then((filePath)=>{
      console.log(filePath);
      console.log('Downloaded');
      res.render('getDownload',{fileName:filePath.temp,videoName:filePath.videoName});
      //res.sendFile(`/home/harsh/Blendmon/Blendmon/Backend/93971.mp4`);
   })
 
});
app.listen(PORT);