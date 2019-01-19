// This is where we would define the buttons
const keys = require('../keys');
const axios = require('axios');
const xml = require('xml');
const xmlString = xml(xmlObject, options);

function addEbayProducts(userInput) {

    queryURL = 'http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=XML&appid=TamTran-SlayTags-PRD-4392af54d-d1615769&siteid=0&version=967&QueryKeywords=iphone&AvailableItemsOnly=true&MaxEntries=3';
    axios.get(queryURL).then(res => {
        console.log(res);
    });

    return $.ajax({
        // request to direct to app
        url: queryURL,
        type: 'GET'
    }).then(function (response) {
        // store data in results
        var results = response.data;
        console.log(results);
    });
}