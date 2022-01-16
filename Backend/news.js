const axios = require('axios');

module.exports.getNews = async () => {
    const url = "https://news-pvx.herokuapp.com/";
    let latestNews = "TECH NEWS--------";

    const { data } = await axios.get(url);
 //   console.log(data);
    let count = 0;

    let news = "☆☆☆☆☆💥 Tech News 💥☆☆☆☆☆ \n\n";
//     data["inshorts"].forEach((headline) => {
//         count += 1
//         if (count > 13) return;
//         news = news + "🌐 " + headline + "\n\n";
//     });
    return data["inshorts"];
};
