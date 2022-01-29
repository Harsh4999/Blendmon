
const express = require('express');
const youtube = require('./youtube');
const insta = require('./insta');
const news = require('./news')
const bodyparser = require('body-parser')
const path=require('path')

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, '../Public')));
const PORT=process.env.PORT||5000;
app.use(bodyparser.urlencoded({extended:false}));
app.get('/',async (req,res,next)=>{
   const data= await news.getNews();
   res.render('index',{data:data});
});
app.get('/you',(req,res,next)=>{
   res.render('youtube');
})
app.get('/horo',(req,res,next)=>{
   res.render('horoscope');
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
   await youtube.video(req.query.fname,type).then((filePath)=>{
      console.log(filePath);
      if(filePath.temp==null||filePath.videoName==null){
         res.render('404');
      }else{
         console.log('Downloaded');
         res.render('getDownload',{fileName:filePath.temp,videoName:filePath.videoName,type:type});
      }
      
   })
 
});
//For getting instaDp
app.get('/instaGram',(req,res,next)=>{
res.render('instaPage');
})
//for instaPost
app.get('/instaPost',(req,res,next)=>{
res.render('instaPost');
})
//instaDPFunction backend
app.get('/instaDp',async(req,res,next)=>{
   const userName=req.query.username;
   const downUrl = await insta.instadp(userName);
   if(downUrl==null){
      res.render('404');
   }else{
      res.render('getDownload',{fileName:downUrl.fileName,videoName:userName,type:'image'});
   }

   
})
app.get('/instaPostDownloader',async (req,res,next)=>{
   const url = req.query.url;
   console.log(url);
   const filename=await insta.instaPost(url);
   if(filename==null){
      res.render('404');
   }else{
      res.render('getDownload',{fileName:filename.filepath,videoName:filename.fileName,type:'Post'});
   }
   //console.log("in server .js",filename.filepath);
   
})

app.get('/news',async(req,res,next)=>{
   const data= await news.getNews();
   res.render('news',{data:data});
})
app.listen(PORT);