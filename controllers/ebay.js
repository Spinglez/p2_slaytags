const axios = require('axios');
const dotenv = require('dotenv');
const db = require('../models');

let keys = dotenv.config();


function ebayQuery(userInput) {

    queryURL = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=TamTran-SlayTags-PRD-4392af54d-d1615769&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD=true&paginationInput.entriesPerPage=10&keywords=" + userInput;
  
    axios.get(queryURL).then(res => {
        for(i=0; i< res.data.findItemsAdvancedResponse[0].searchResult[0].item.length; i++){
            console.log("CHECKING LENGTH", res.data.findItemsAdvancedResponse[0].searchResult[0].item.length)
            // console.log("EBAY DATA!*******");
            // console.log("Name: ",res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].title[0]);
            // console.log("Price: ", res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].sellingStatus[0].currentPrice[0].__value__);
            // console.log("ID", res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].itemId[0])
        db.EBProducts.create({
          name: res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].title[0],
          sku: res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].itemId[0],
          price: res.data.findItemsAdvancedResponse[0].searchResult[0].item[i].sellingStatus[0].currentPrice[0].__value__
        }).then(function (dbProducts) {
          console.log(dbProducts);
        });
        };
    });
  
  }
  module.exports = ebayQuery;
  