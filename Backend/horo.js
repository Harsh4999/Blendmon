const axios = require('axios');
module.exports.gethoro = async function gethoro(){
    let l=['aries','taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius','pisces']
   let arr=[];
 
    for(let i=0;i<l.length;i++){
        var sunsign = l[i];
        var mainconfig={
            method:'POST',
            url: `https://aztro.sameerkumar.website/?sign=${sunsign}&day=today`
        }
        await axios.request(mainconfig).then((res)=>{
            res.data
            arr.push(res.data);
        }).catch((err)=>{
            console.log(err);
            arr.push(null);
        });
    }
        // var sunsign = 'scorpio';
        // var mainconfig={
        //     method:'POST',
        //     url: `https://aztro.sameerkumar.website/?sign=${sunsign}&day=today`
        // }
        // await axios.request(mainconfig).then((res)=>{
        //     res.data
        //     arr.push(res.data);
        // }).catch((err)=>{
        //     console.log(err);
        //     arr.push(null);
        // });
    return arr;
}