// use require to get the json file data
const link = require('../products.json');
// console.log(link);
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return link.items.length;
}

/*
 * Define and use your functions here
 */
var items = [];
let getItems = function(){
    //returns array of items
    items = link.items;
}
getItems();

let itemsByBrand = [];

//brand = link.items.product.brand
// let desiredBrand = process.argv[2];
const getItemsByBrand = function(items, desiredBrand){
    //returns desired brand items in itemsByBrandArray
    for (let i=0; i<items.length; i+=1){
        if (items[i].product.brand === desiredBrand){
            // console.log(link.items[i]);
            itemsByBrand.push(items[i]);
        }
    }
    // console.log(itemsByBrand)
}
// getItemsByBrand();


// let desiredAuthor = process.argv[2];
let itemsByAuthor = [];
const getItemsByAuthor = function(items, desiredAuthor){
    for (let j=0; j<items.length; j+=1){
        if (items[j].product.author.name === desiredAuthor){
            itemsByAuthor.push(items[j]);
        }
    }
    // console.log(itemsByAuthor);
}
// getItemsByAuthor(items);

let availableProducts = [];
const getAvailableProducts = function(){
    for (let i=0; i<items.length; i+=1){
        if(items[i].product.inventories[0].availability === "inStock"){
            availableProducts.push(items[i]);
        }
    }
    // console.log(availableProducts);
    // console.log(availableProducts.length);
}
getAvailableProducts();

let desiredBrand = process.argv[2];
let desiredAuthor = process.argv[3];

// let desiredAuthor = process.argv[2] + " " + process.argv[3]

// getItems();
// getItemsByBrand(items, desiredBrand);
// console.log("available Sony items: "+itemsByBrand.length);

//note: got [object object] result for items without stringify
// getItemsByAuthor(itemsByBrand, desiredAuthor);
// console.log('available adorama camera items: '+JSON.stringify(itemsByAuthor));
// getAvailableProducts();

// console.log(link.items[15].product.inventories[0].availability)




// output item count using the getItemsCount function
var data = {}; // replace this line with the data from the require statement
// console.log('Item Count: ' + getItemsCount(data));