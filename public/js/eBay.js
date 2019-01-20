// This is where we would define the buttons
// const keys = require('../keys');
const dotenv = require('dotenv');

const axios = require('axios');
const xml = require('xml');
// const xmlString = xml(xmlObject, options);

function addEbayProducts(userInput) {

    queryURL = 'http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=TamTran-SlayTags-PRD-4392af54d-d1615769&siteid=0&version=967&QueryKeywords=iphone&AvailableItemsOnly=true&MaxEntries=3';
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

function createProductRow(product) {
    var newTr = $('<tr>');
    newTr.data('product', product);
    newTr.append('<td>' + product.title + '</td>');
    newTr.append('<td>' + product.ProductID + '</td>');
    newTr.append('<td>' + product.DetailsURL + '</td>');
    newTr.append('<td>' + product.ItemSpecifics + '</td>');
    newTr.append('<td>' + product.StockPhotoURL + '</td>');

    return newTr;
}

function getProducts() {
    return $.ajax({
        // request to direct to app
        url: '/api/products',
        type: 'GET'
    }).then(function (response) {
        // store data in results
        let results = response.data;

        let rowsToAdd = [];
        for (let i = 0; i < results.length; i++) {
            rowsToAdd.push(createAuthorRow(results[i]));
        }
        // add rows through to handlebars
        //  ...
        nameInput.val('');
    });
}

$('#search-item').on('click', getProducts());
