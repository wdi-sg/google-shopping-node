// use require to get the json file data

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
  return objectData.items;
}

function getItemsByBrand(items,brand) {
    let selectedItems = [];
    for (let i=0; i<items.length; i++){
        if (items[i].product.brand.toLowerCase() === brand.toLowerCase()){
            selectedItems.push(items[i]);
        }
    }
    if (selectedItems.length === 0){
        return "No items found."
    }
    else {
        return selectedItems;
    }
}
function getItemsByAuthor(items,author) {
  let selectedItems = [];
    for (let i=0; i<items.length; i++){
        if (items[i].product.author.name.toLowerCase() === author.toLowerCase()){
            selectedItems.push(items[i]);
        }
    }
    return selectedItems;
}
function getAvailableProducts(items) {
  let selectedItems = [];
    for (let i=0; i<items.length; i++){
        if (items[i].product.inventories[0].availability === "inStock"){
            selectedItems.push(items[i]);
        }
    }
    return selectedItems;
}
/*
function getAvailableProducts(items) {
  let selectedItems = [];
    for (let i=0; i<items.length; i++){
        for (let j=0; j<product.length; j++){
            if (items[i].product.inventories[0].availability === "inStock"){
                selectedItems.push(items[i]);
            }
    }
    return selectedItems;
}
*/

// output item count using the getItemsCount function
const data = require('../products.json'); // replace this line with the data from the require statement
var items = getItems(data);
//console.log('Item Count: ' + getItemsCount(data));
//console.log('Items: '+ items);
//console.log('Item by Brands: ' + getItemsByBrand(items,process.argv[2]));
//console.log('Item by Authors: ' + getItemsByAuthor(items,process.argv[2]));
//console.log('Available Items: '+ getAvailableProducts(items));

//var sonyItems = getItemsByBrand(items, 'Sony');
//var availableSonyItems = getAvailableProducts(sonyItems);
 //console.log(`Sony items: ${sonyItems}`);
//console.log(`Sony items (available): ${availableSonyItems}`)

// var adoramaItems = getItemsByAuthor(items,'Adorama Camera');
// var availableAdoramaItems = getAvailableProducts(adoramaItems);
// console.log(adoramaItems);
// console.log(`Adorama Camera (Available): ${availableAdoramaItems}`);
// no results found

var nikonItems = getItemsByBrand(items,'Nikon');
var ebayNikonItems = getItemsByAuthor(nikonItems,'eBay');
console.log(`Nikon by eBay items: ${ebayNikonItems}`);
//no results found