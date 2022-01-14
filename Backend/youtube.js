const { get } = require('express/lib/response');
const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above
const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}` }

module.exports.video = async (songname)=>{
    let info= await ytdl.getInfo(songname);
    const fileName = 'Public/video.mp4';
await ytdl(songname,{filter: info => info.container==='mp4'})
 .pipe(fs.createWriteStream(fileName))
 return fileName;
}
 