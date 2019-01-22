const axios = require('axios');
const dotenv = require('dotenv');
const db = require('../models');

let keys = dotenv.config();

function ebayQuery(userInput) {

    queryURL = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=TamTran-SlayTags-PRD-4392af54d-d1615769&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD=true&paginationInput.entriesPerPage=10&keywords=" + userInput;
  
    axios.get(queryURL).then(res => {
        for(i=0; i< res.data.findItemsAdvancedResponse[0].searchResult[0].item.length; i++){
        db.Products.create({
          provider: "ebay",
          url: res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].viewItemURL[0],
          name: res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].title[0],
          sku: res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].itemId[0],
          price: res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].sellingStatus[0].currentPrice[0].__value__
        }).then(function (dbProducts) {
        });
        };
    });
  
  }
  module.exports = ebayQuery;
  