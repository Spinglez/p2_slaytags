const axios = require('axios');

function bestBuyQuery(queryURL){

axios.get(queryURL).then(res => {
    console.log(res);
  });
}
module.exports = bestBuyQuery;