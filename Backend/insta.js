const axios=require('axios');
const fs = require('fs');
// const client = require('https');
let upper = 6
let lower = 1
const getRandom = (ext) => { return `${Math.floor(Math.random() * (upper - lower + 1) + lower)}${ext}` }
module.exports.instadp=async (userNmae)=>{
    console.log(userNmae);
    let downurl;
 return  await axios.get(`https://www.instagram.com/${userNmae}/?__a=1`, {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
          "cache-control": "max-age=0",
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          "sec-ch-ua-mobile": "?1",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          cookie:
            'ig_did=305179C0-CE28-4DCD-847A-2F28A98B7DBF; ig_nrcb=1; mid=YQBN3wAEAAGfSSDsZYS9nf2a5MHO; csrftoken=KItbBYAsObQgmJU2CsfqfiRFtk8JXwgm; sessionid=29386738134%3A8NwzjrA3jruVB4%3A23; ds_user_id=29386738134; fbm_124024574287414=base_domain=.instagram.com; shbid="18377\05429386738134\0541672337811:01f700b907e4989b1e3262de3bf81611179bfac4b92f2e183e834051100ec169c2a27039"; shbts="1640801811\05429386738134\0541672337811:01f7823ea6b0b20d524c813a3be696cdcdb776accb2e3386302ac5bd36016a084769fb24"; fbsr_124024574287414=ZuSqU7FvOCJ6FX51JBQpBFYMI9zNCVKgWT67wB9wwWQ.eyJ1c2VyX2lkIjoiMTAwMDA5NDY1ODIwODQyIiwiY29kZSI6IkFRRG55ZXNxSXdYVFlsQzhkSVlIZF9aYU5KT1ZBMnRjU3loZENMRmlZSlhtM2FqZHoyWDh3bnlNeXdSN0ZTcUN0MGdCMnNzTnRvX0RZV1RnS2xPRnBjSGFrTHZicjdvakYyUnJsWkYzRXdLUWhlM2Y4UFdsUF81dVVNOTF1YXY5azIyZnAyNVBWZlBKbm5LbkpPcTV5Q243anFRc3FBWkxzVjJDbUlsN0pJSmhmQkY1MVYtd09WdGR2ajNscmREcENIajkwMlpfN3BMSncxeUNFU2tULU9WbHRLYWwxYTBVUFMxNmhuN0p2bkhwUlNpZHc3WVZoenBRRE5yZV90bWlGVFhaTU5iR19CeWRTQ2hNU3hUcGNLenpRNVU2UV9uYlcweGZFajZHNFJCbzVjTmNsakRMdGhFNFdGSllFNWd6c2VNVURWMVROQnUtMlQ5dWNDOWVWYTNFIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQU85YkR5QlZoWkJTWHMyYTQ3dW5jWDY0ekRrelNBN1pCWkNUWG5Ub2F0bU9jUVpCTFVaQmxaQWdSb2hpMmo4UGp4dkd1Z3JvOWJZc3I4cWRzZjdBMm9LNDhJS3h2d3p2bHFJSXVZVUhUUzBjU0M3czYycGZaQVAwcWE1ZVpBbnF0TEpFTHI0WkMyQ25iSzRWWHdaQTNFam5CSjhJRGcxcmV6VWNFbUpCVnJPeGJtcnRjOUdidWhlZjRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjQwOTYyNDMyfQ; rur="VLL\05429386738134\0541672498460:01f7979132597968399c78c68b32a649c53f7f51a3343d84ab7b3754d769843033697756"',
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
      }).then((res)=>{
	//console.log(res.data.graphql.user.profile_pic_url_hd);
     downurl=(res.data.graphql.user.profile_pic_url_hd);
        console.log(downurl);
        const fileName = `${getRandom('.jpg')}`;
        downloadImage(downurl,`Public/${fileName}`);
        return {downurl,fileName};
    }).catch((err)=>{
        console.log(err);
     })
     async function downloadImage(url, filepath) {
      const response = await axios({
          url,
          method: 'GET',
          responseType: 'stream'
      });
      return new Promise((resolve, reject) => {
          response.data.pipe(fs.createWriteStream(filepath))
              .on('error', reject)
              .once('close', () => resolve(filepath)); 
      });
  }
}
module.exports.instaPost = async (postUrl)=>{
  let downUrl;
  return await axios.get(postUrl+'?__a=1', {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
      'cache-control': 'max-age=0',
      'sec-ch-ua':
        '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      'sec-ch-ua-mobile': '?1',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      cookie:
        'mid=YSEC4AALAAF5bk0tas41HCJDdxtP; ig_did=B2AB4361-90CF-41D5-B36E-03E66EEE1AA1; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; csrftoken=rhAkB2pduDbm5MTbyIofl0UrbR7Jr3AE; ds_user_id=4274094922; sessionid=4274094922%3Ay2mh0rvpQWd74X%3A19; shbid="17689\\0544274094922\\0541661437335:01f71a0599f6f1fdd84afc93ceb82193825b09ee67cdb74f25a8f1b14b2d3acd3cc89283"; shbts="1629901335\\0544274094922\\0541661437335:01f7ad7ac6485740dfe51c33ba803579ce09dad43e3b5dbc1f73c8bc8b41a5f734a9c458"; fbsr_124024574287414=veflxUzvfnSZgJ06Av5OS7EeCnhBb8Qs9bS57QEcvYY.eyJ1c2VyX2lkIjoiMTAwMDAzMDkxMzYxODk1IiwiY29kZSI6IkFRQzlPTzlES0ZDUk5pZ0QwQUZFa1ljeE14ME15MnVtdE5UeXVLdk95R1VibUdMVVdaWm95c1k3cDA5eXNsSmlBbjUtQkh3WWZnNGlwU0lnOWNPUzNVeVdwMU9sa0tLRU51SjBic3hldTRBNFphcDU3QzFkLXdxVVJveXlTREs2eWlYWFg3WXhuaTdseGRvdTEySFgyUFhjbV83Ul9QR2IzU2RMbTMyRUdZYjBNQ1JXSGxMVElfTWdMT0pBT3BpYTV0c3E5ZXBZc19mbG5fSU9PRnZURjhoWlF4MEVpT2c3YU9tb01uZF91b0Q5SHhzX0lreG85dHRuSjc4dWp6NzJsN3I1UEdHMXFWV25pQnVnTVJNczY1c0wtSTVvVmRkM0dZM1Q2MWoySi1VRVdlTy1OSENuVmtqTmNsdDNQUkowZGtSQkd2cGhZdUZ2NVBpWnZoLXRqdUVlIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUUxNnhEMkh5bHFaQU9sQ0xvbWI2b3NnS0I2dVlNVER4NVl3YlVJb0FZQ2t5ZjdPclZjZ2tpVFVGd1J0SVgxWkFhY1h4Z3dYQ3Z3aEJ6NjhmTWJmRGNrVVBqaUFoaWpxTVpCZzg5QUxpYjYzbXZMZlB5TWRrQkg4NU1BVkt0RXhnb1V2Q0hzd3g0S3V4WE9PTmUzcWZDVmJaQWViSGY5endhWkJyNVd6UCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI5OTI1ODA3fQ; rur="LLA\\0544274094922\\0541661461817:01f7d8ba9ccfea9b57dbe7964bccfad9730064d4820485744c887fce9e53db3b4bf43c9f"',
    },
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: null,
    method: 'GET',
    mode: 'cors',
  }).then(async res=>{
    let filepath,fileName;
    if (res.status == 200){
      
      if(res.data.graphql.shortcode_media.is_video){
         downUrl= res.data.graphql.shortcode_media.video_url;
         filepath=`${getRandom('.mp4')}`
         fileName=res.data.graphql.shortcode_media.owner.username;
      }
      else{
          downUrl= res.data.graphql.shortcode_media.display_url;
          filepath=`${getRandom('.jpg')}`
          fileName=res.data.graphql.shortcode_media.owner.username;
      }
      download(downUrl,`Public/${filepath}`);
    }
    return {filepath,fileName};
  }).catch(err=>{
    console.log(err);
  });
    async function download(url, filepath) {
      const response = await axios({
          url,
          method: 'GET',
          responseType: 'stream'
      });
      return new Promise((resolve, reject) => {
          response.data.pipe(fs.createWriteStream(filepath))
              .on('error', reject)
              .once('close', () => resolve(filepath)); 
      });
    }
}
