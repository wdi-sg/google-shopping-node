// use require to get the json file data
var products = require("../products.json");
// console.log(products);
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

// function getItemsCount(itemData) {

//     var itemData = products;

//     // console.log(itemData.items.length);
//     return itemData.items.length;
// }


function getItems() {

    // console.log(itemData.items.length);
    return products.items;
}
var items = getItems(products);

//////////////////////////////////////////////////////////////////////////////////////
function getItemsByBrand(items,brand){
  var itemData = [];
  for(let i = 0; i < items.length; i++){
    if(items[i].product.brand.toLowerCase() === brand.toLowerCase()){
    itemData.push((items[i]));
    }
  }
  return itemData;
}
//////////////////////////////////////////////////////////////////////////////////////
function getItemsByAuthor(items,author){
  var itemData = [];
  for( let i = 0; i < items.length; i++){
    if(items[i].product.author.name.includes(author)){
    itemData.push((items[i]));
    }
  }
  return itemData;
}
//////////////////////////////////////////////////////////////////////////////////////
function getAvailableProducts(items){
  var itemData = [];
  for( let i = 0; i < items.length; i++){
    if( items[i].product.inventories[0].availability === 'inStock'){
    itemData.push((items[i].product.title));
    }
  }
  return itemData;
}


////////////////////////////////////////////////////////////////////////////////////
/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
// var data = {}; // replace this line with the data from the require statement
// console.log('Item Count: ' + getItemsCount(data));

// //All items made by Sony
// console.log(getItemsByBrand(items,'Sony'));

// //All items made by Sony that are available.
// console.log(getAvailableProducts(getItemsByBrand(items,'Sony')));

// //All available items by the author "Adorama Camera"
// console.log(getAvailableProducts(getItemsByAuthor(items,'Adorama Camera')));

//All items made by Nikon with the author eBay.
// var nikonItems = getItemsByBrand( items, "Nikon" );
// console.log(getAvailableProducts(getItemsByAuthor(nikonItems, "eBay")));

//////////////////////////////////////////////////////////////////////////////
// search by user input

let input1 = process.argv[2];
var userInputItem = getItemsByBrand(items,input1);
// console.log(userInputItem);

///////////////////////////////////////////////////////////////////////////////
//If no results were found, let the user know.

if (userInputItem.length !== 0){
    for (let i = 0; i < userInputItem.length; i++ ){
        var itemsAvailable = [];
        itemsAvailable.push(userInputItem[i].product.title);
        console.log(itemsAvailable)
    }
} else {
    console.log('There are no items available.')
}

///////////////////////////////////////////////////////////////////////////////
