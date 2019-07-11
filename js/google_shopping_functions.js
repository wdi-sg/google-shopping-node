// use require to get the json file data
var product = require('../products.json');

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

function getItems(itemData){
    return itemData.items;
}
function getItemsByBrand(itemsData,brand){
    let items = [];
    for(var i=0; i<itemsData.length; i++){
        if(itemsData[i].product.brand === brand){
            items.push(itemsData[i]);
        }
    }
    return items;
}

function getItemsByAuthor(itemsData, author){
    let items = [];
    for(var i=0; i<itemsData.length; i++){
      // console.log(items[i].product.author.name);
      if(itemsData[i].product.author.name === author) {
        items.push(itemsData[i]);
        }

    }
    return items;
}

function getAvailableProducts(itemsData){
    let items = [];
    for( var i=0; i<itemsData.length; i++){
        if(itemsData[i].product.inventories[0].availability === "inStock"){
            items.push(itemsData[i]);
        }
    }
    return  items;
}
    //return itemData.items.inventories.availability;

/*
 * Define and use your functions here
 */
//let itemCount = getItemsCount(product);
//console.log("Item count: ", itemCount);
var items = getItems(product);


//show sony
var sonyItems = getItemsByBrand(items, "Sony");
//console.log(sonyItems);
var availableSony = getAvailableProducts(sonyItems);
console.log(availableSony);
//to get all items with the name Adorama Camera
var adorama = getItemsByAuthor(items,"Adorama Camera");
console.log(adorama);

var nikonItems = getItemsByBrand(items, "Nikon");
console.log(nikonItems);
var availableNikon = getAvailableProducts(nikonItems);
console.log(availableNikon);




//



//module.exports = data;

// // output item count using the getItemsCount function
// var data = {
//     itemCount : getItemsCount,
//     itemShown : getItems,
//     itemBrand : getItemsByBrand,
//     itemAuthor : getItemsByAuthor,
//     itemAvailable : getAvailableProducts
// }; // replace this line with the data from the require statement