// use require to get the json file data
var data = require("./../products");

var getData = function(data){
    return data.items;
}
var productData = getData(data);
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */
var getItemsByBrand = function(productData, input){
    var tempArray = [];
    for (i=0; i<productData.length; i++){
        if(productData[i].product.brand === input){
            tempArray.push(productData[i].product.title);
        }
    }
    return tempArray;
 }

var getItemsByAuthor = function(productData, input){
    var tempArray = [];
    for (i=0; i<productData.length; i++){
        if(productData[i].product.author.name === input){
            tempArray.push(productData[i].product.title);
        }
    }
    return tempArray;
 }

 var getAvailableProducts = function(input){
    var tempArray = [];
    for (i=0; i<data.items.length; i++){
        if((productData[i].product.inventories[0].availability === "inStock" && productData[i].product.author.name === input) || (productData[i].product.inventories[0].availability === "inStock" && productData[i].product.brand === input)){
            tempArray.push(data.items[i].product.title);
        }
    }
    return tempArray;
 }