console.log("jello")

// 1. getItems(objectData)
const everything = require("../products.json");

// console.log(products)
function getItems(objectData) {
  return (objectData.items);
};

//console.log(getItems(everything))

// 2. getItemsByBrand(items, brand)
var getItemsByBrand = function (items, brand) {
    var brandItems = [];
  for (var i = 0; i < items.length; i++ ) {
    if (items[i].product.brand === brand) {
        brandItems.push(items[i].product.brand);
    }
  }
  return brandItems;
};

var allItems = getItems(everything);
var byBrand = getItemsByBrand(allItems, 'Sony');
// console.log(byBrand);

// 3. getItemsByAuthor(items, author)
var getItemsByAuthor = function(items, authorName) {
    var authorItems = [];
    for (var i = 0; i < items.length; i++){
        if (items[i].product.author.name.includes(authorName){
            authorItems.push(items[i]);
        }
    }
    return authorItems
};

// var allItems = getItems(everything);
// console.log(getItemsByAuthor(allItems, 'eBay'));


// 4. getAvailableProducts(items)
var getItemsInStock =function (itemsSony) {
    var inStock = [];
    for (var i = 0; i < itemsSony.length; i++ ) {
        if (itemsSony[i].product.inventories[0].availability === 'inStock' ) {
            inStock.push(itemsSony[i].product.title);
        }
    }
    return inStock;
    console.log(inStock);
}








// use require to get the json file data

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

/*
 * Define and use your functions here
 */

////////////////////////////////////////////////

// output item count using the getItemsCount function
// var data = {}; // replace this line with the data from the require statement
// console.log('Item Count: ' + getItemsCount(data));




// function getItemsCount(itemData) {
//   return itemData.items;
// }