const dotenv = require('dotenv');
const axios = require('axios');
let keys = dotenv.config();

function bestBuyQuery(userInput){

console.log("userinput ", userInput);
queryURL = 'https://api.bestbuy.com/v1/products(name=' + userInput + '*)?show=sku,name,salePrice&apiKey=' + keys.parsed.BESTBUY_KEY;

console.log("query url", queryURL);

axios.get(queryURL).then(res => {
    console.log(res.data);
  });
}
module.exports = bestBuyQuery;