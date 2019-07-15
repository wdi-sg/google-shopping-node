// use require to get the json file data
const products = require('../products.json');
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }

/*
 * Define and use your functions here
 */
 //return items (1)
function getItems (itemData) {
    return itemData["items"];
}
console.log(getItems(products));

//return items by brand (2)
var brand = process.argv[2]; //further
function getItemsByBrand (itemData, brand){
    let items = [];
    for (var i = 0; i<itemData.length; i++){
        if(itemData[i]["product"]["brand"].toLowerCase() === brand.toLowerCase()){
            items.push(itemData[i]);
        }
    }
    return items;
}
console.log (getItemsByBrand(getItems(products),(product.argv[2])));

// output item count using the getItemsCount function
// var data = {}; // replace this line with the data from the require statement
//console.log('Item Count: ' + getItemsCount(data));