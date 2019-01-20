const axios = require('axios');
const dotenv = require('dotenv');
var parser = require('fast-xml-parser');
var he = require('he');
const db = require('../models');

var options = {
  attributeNamePrefix: "@_",
  attrNodeName: "attr", //default is 'false'
  textNodeName: "#text",
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  localeRange: "", //To support non english character in tag/attribute values.
  parseTrueNumberOnly: false,
  attrValueProcessor: a => he.decode(a, { isAttributeValue: true }),//default is a=>a
  tagValueProcessor: a => he.decode(a) //default is a=>a
};


let keys = dotenv.config();

function bestBuyQuery(userInput) {

  queryURL = 'https://api.bestbuy.com/v1/products(name=' + userInput + '*)?show=sku,name,salePrice&apiKey=' + keys.parsed.BESTBUY_KEY;

  axios.get(queryURL).then(res => {
    if (parser.validate(res.data) === true) { 
      var jsonObj = parser.parse(res.data, options);
    }
    var tObj = parser.getTraversalObj(res.data, options);
    var jsonObj = parser.convertToJson(tObj, options);
    for (i = 0; i < jsonObj.products.product.length; i++) {

      db.Products.create({
        name: jsonObj.products.product[i].name,
        sku: jsonObj.products.product[i].sku,
        price: jsonObj.products.product[i].salePrice
      }).then(function (dbProducts) {
        console.log(dbProducts);
      });
    }
  });

}
module.exports = bestBuyQuery;