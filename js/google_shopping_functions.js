// use require to get the json file data
const products = require("../products.json");
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
/*function getItemsCount(itemData) {
  return itemData.items.length;
}*/

/*
 * Define and use your functions here
 */
function allItemsCount(itemsCount){
    itemsCount = products.items.length;
    console.log("items count: " + itemsCount);
}
allItemsCount();
// output item count using the getItemsCount function
//var data = {}; // replace this line with the data from the require statement
//console.log('Item Count: ' + getItemsCount(data));

var getItems = function() {
  for (var i = 0; i < products.items.length; i++) {
    products.items[i];
    console.log(products.items[i]);
  }
};

getItems();

var getItemsByBrand = function(products, brand) {
  var itemsInBrand =[];
  for(var i = 0; i < products.items.length; i++) {
    if (brand === products.items[i].product.brand) {
      itemsInBrand.push(products.items[i].product.title);
    }
  }
  console.log("Items by " + brand + " " + itemsInBrand);
  return itemsInBrand;
};

getItemsByBrand(products, "Sony");
getItemsByBrand(products, "Canon");
getItemsByBrand(products, "Nikon");
getItemsByBrand(products, "Panasonic");

var getItemsByAuthor = function(products, author) {
  var itemsByAuthor = [];
  for(var i = 0; i < products.items.length; i++) {
    if (products.items[i].product.author.name.includes(author)) {
      itemsByAuthor.push(products.items[i].product.title);
    }
  }
  console.log("Items by " + author + " " + itemsByAuthor);
  return itemsByAuthor;
};

getItemsByAuthor(products, "Target");
getItemsByAuthor(products, "CDW");
getItemsByAuthor(products, "eBay");
getItemsByAuthor(products, "Adorama Camera");

var getAvailableProducts = function(items) {
  var availableProducts = [];
  for(var i = 0; i < products.items.length; i++) {
    if (products.items[i].product.inventories[0].availability === "inStock") {
      availableProducts.push(products.items[i].product.title);
    }
  }
  console.log("Items in stock "  + availableProducts);
  return availableProducts;
};

getAvailableProducts();

var getBrandInStock = function(products, brand){
    var brandInStock = [];
    for(var i = 0; i < products.items.length; i++) {
    if (products.items[i].product.inventories[0].availability === "inStock" && brand === products.items[i].product.brand) {
      brandInStock.push(products.items[i].product.title);
    }
  }
  console.log("Items of " + brand + " in stock "  + brandInStock);
  return brandInStock;
};

getBrandInStock(products, "Sony");

var getBrandByAuthor = function(brand, author) {
  var brandByAuthor = [];
  for(var i = 0; i < products.items.length; i++) {
    if (products.items[i].product.author.name.includes(author) && brand === products.items[i].product.brand) {
      brandByAuthor.push(products.items[i].product.title);
    }
  }
  console.log(brand + " by " + author + " " + brandByAuthor);
  return brandByAuthor;
};

getBrandByAuthor("Nikon", "eBay");