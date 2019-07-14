// use require to get the json file data

//try {
  //Check if file exists
  var data = require("../products.json");
//} catch (err) {
//  console.log("Please input correct file. " + err);
//  return;
//}
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
function getItems(objectData) {
  if (objectData.items) {
    //Check if items object exist
    return objectData.items;
  }
}
function getItemsByBrand(items, brand) {
    let itemArr = [];
    for (var i =0; i<items.length; i++){
        if (items[i].product.brand === brand) {
          itemArr.push(items[i]);
        }
    }
    return itemArr;
}
function getItemsByAuthor(items, author) {
    let itemArr = [];
    for (var i = 0; i < items.length; i++) {
      //if (items[i].product.author.name === author) {
        if (items[i].product.author.name.includes("eBay")) {
        itemArr.push(items[i]);
      }
    }
    return itemArr;
}
function getAvailableProducts(items) {
  let itemArr = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === "inStock") {
      itemArr.push(items[i]);
    }
  }
  return itemArr;
}

var items = getItems(data);
var sonyItems = getItemsByBrand(items, "Sony");
var availableSonyItems = getAvailableProducts(sonyItems);
var adoramaCameraItems = getItemsByAuthor(items, "Adorama Camera");
var availableAdoramaCamItems = getAvailableProducts(adoramaCameraItems);
var nikonItems = getItemsByBrand(items, "Nikon");
var ebayNikon = getItemsByAuthor(nikonItems, "eBay");

var userTaskSelected = process.argv[2];

if (userTaskSelected === "searchByBrand"){
    var userBrandInput = process.argv[3];
    var itemsFound = getItemsByBrand(items, userBrandInput);

    if (itemsFound.length === 0) {
      console.log("No Results Were Found.");
    } else {
      console.log(itemsFound);
    }
}

////For Debugging
//// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));
//console.log(getItems(data));
//console.log(getItemsByBrand(getItems(data), 'Nikon'));
//console.log(getItemsByAuthor(getItems(data), "eBay"));
//console.log(getAvailableProducts(getItems(data)));

////All items made by Sony
// console.log(sonyItems);
////All items made by Sony that are available
// console.log(availableSonyItems);
////All available items by the author "Adorama Camera"
// console.log(availableAdoramaCamItems);
////All items made by Nikon with the author eBay.
// console.log(ebayNikon);