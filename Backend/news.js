const axios = require('axios');

module.exports.getNews = async () => {
    const url = "https://news-pvx.herokuapp.com/";
    let latestNews = "TECH NEWS--------";

    const { data } = await axios.get(url);
  // console.log(data);

<<<<<<< HEAD
=======
    let news = "☆☆☆☆☆💥 Tech News 💥☆☆☆☆☆ \n\n";
//     data["inshorts"].forEach((headline) => {
//         count += 1
//         if (count > 13) return;
//         news = news + "🌐 " + headline + "\n\n";
//     });
    // return data["inshorts"];
>>>>>>> 62006cdbddbc2c65693ffcc4081ba72f6c10c2d3
    const obj = {
        "inshorts": data["inshorts"],
        "techradar": data["gadgets-now"],
        "techgig": data["techcrunch"]
    }
    return obj;
};
