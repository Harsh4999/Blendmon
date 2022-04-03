const { get } = require('express/lib/response');
const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above
let upper = 6
let lower = 1
const getRandom = (ext) => { return `${Math.floor(Math.random() * (upper - lower + 1) + lower)}${ext}` }

module.exports.video = async (songname,type)=>{
    var temp;
    var videoName;
    if(type=='video'){
        temp=getRandom('.mp4');
        var fileName = 'Public/'+temp;
        await ytdl.getInfo(songname).then(async d=>{
            videoName= d.videoDetails.title;
            console.log("videoka naame=",d.videoDetails.title);
            await ytdl(songname,{filter: info => info.itag == 38 || info.itag == 37 || info.itag== 22 ||info.itage== 83 ||info.itag== 18})
            .pipe(fs.createWriteStream(fileName))
        }).catch(err=>{
            temp=null;
            videoName=null;
        })       
    }else{
        temp=getRandom('.mp3');
        var fileName = 'Public/'+temp;
         await ytdl.getInfo(songname).then(async d=>{
             videoName =d.videoDetails.title;
             let audioFormats = ytdl.filterFormats(d.formats, 'audioonly');
           await  ytdl(songname,{filter: audioFormats => audioFormats.audioBitrate==160})
          .pipe(await fs.createWriteStream(fileName));
         }).catch(err=>{
             temp=null;
             videoName=null;
         })
 
    }
 
 return {temp,videoName};
}
 