// use require to get the json file data
const products = require('../products.json');
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.length;
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
var data = products.items; // replace this line with the data from the require statement

console.log('Item Count: ' + getItemsCount(data));

var getItems = function(objectData) {
    return objectData.items;
};



var getItemsByBrand = function(items,brand) {
  var itemsByBrand = [];
  for(let i = 0 ; i < items.length; i ++){
    if (items[i].product.brand === brand ){
      itemsByBrand.push(items[i]);
    }
  }
  return itemsByBrand;
};

var getItemsByAuthor = function(items,author) {
  var itemsByAuthor = [];
  for(let i = 0 ; i < items.length; i ++){
    if (items[i].product.author.name.includes(author)) {
      itemsByAuthor.push(items[i]);
    }
  }
  return itemsByAuthor;
};

var getAvailableProducts = function(items) {
  var availableProducts = [];
  for(let i = 0 ; i <  items.length; i ++){
    if (items[i].product.inventories[0].availability === "inStock" ){
      availableProducts.push(items[i]);
    }
  }
  return availableProducts;
};



//Part One

// All items made by Sony.
console.log('All items made by Sony');
console.log(getItemsByBrand(data, 'Sony'));

// All items made by Sony that are available.
console.log('All items made by Sony that are available');
var sony = getItemsByBrand(data, 'Sony');
console.log(getAvailableProducts(sony));

// All available items by the author "Adorama Camera"
console.log('All available items by the author Adorama Camera');
var adorama = getItemsByAuthor(data, 'Adorama Camera');
console.log(adorama);
console.log(getAvailableProducts(adorama));

// All items made by Nikon with the author eBay.
console.log('All items made by Nikon with the author eBay');
var nikon = getItemsByBrand(data, 'Nikon')
console.log(nikon);
console.log(getItemsByAuthor(nikon, 'eBay'));

// Get User Input to run functions
// if user run node js/google_shopping_functions.js Nikon, getItemsByBrand(data,'Nikon');

var userInput1 = process.argv[2];

if ( userInput1 !== ""){
  var list = getItemsByBrand(data, userInput1);
  console.log(list);
  if (list.length === 0) {
    console.log('no results were found for ' + userInput1);
  }
} 
