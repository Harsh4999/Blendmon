const fileName= require('./values')
const express = require('express');
const youtube = require('./youtube');
// const bodyparser = require('body-parser')
const path=require('path')

const app = express();
app.use(express.static(path.join(__dirname, '../Public')));
console.log(__dirname+'/../Public');
const PORT=3000;
//app.use(bodyparser.urlencoded());
app.get('/',(req,res,next)=>{
  res.sendFile(path.resolve('Backend/index.html'));
  // res.render('index')  
 // next();
});
app.get('/you',(req,res,next)=>{
   res.sendFile(path.resolve('Backend/youtube.html'));
})
app.get('/youtube',async (req,res,next)=>{
  // const songName = req.params.name;
   const url=req.query.fname;
   //console.log(req)
  console.log(url);
   await youtube.video(req.query.fname).then((filePath)=>{
      console.log(filePath);
      console.log('Downloaded');
      res.sendFile(path.resolve('Backend/index.html'));
      //res.sendFile(`/home/harsh/Blendmon/Blendmon/Backend/93971.mp4`);
   })
 
});
app.listen(PORT);