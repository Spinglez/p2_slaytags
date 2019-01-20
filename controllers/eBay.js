const axios = require('axios');
const dotenv = require('dotenv');
var parser = require('fast-xml-parser');
var he = require('he');

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

function eBayQuery(userInput) {

  console.log("userinput ", userInput);

  //This is for multiple items searched by query keywords. Will need another query to search by item # to pull price information.
  
  queryURL = 'http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=' + keys.parsed.APP_ID + '&siteid=0&version=967&QueryKeywords=' + userInput + 'iphone&AvailableItemsOnly=true&MaxEntries=3';

  console.log("query url", queryURL);

  axios.get(queryURL).then(res => {
    if (parser.validate(res.data) === true) { //optional (it'll return an object in case it's not valid)
      var jsonObj = parser.parse(res.data, options);
    }

    // Intermediate obj
    var tObj = parser.getTraversalObj(res.data, options);
    var jsonObj = parser.convertToJson(tObj, options);

    console.log(jsonObj);
  });
}
module.exports = eBayQuery;