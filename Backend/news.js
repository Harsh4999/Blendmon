const axios = require('axios');

module.exports.getNews = async () => {
    const url = "https://news-pvx.herokuapp.com/";
    let latestNews = "TECH NEWS--------";

    const { data } = await axios.get(url);
  // console.log(data);


    const obj = {
        "inshorts": data["inshorts"],
        "techradar": data["gadgets-now"],
        "techgig": data["techcrunch"]
    }
    return obj;
};
