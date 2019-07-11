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


// Sony Items
//var sonyItems = getItemsByBrand(items, 'Sony');
//console.log(`Sony items: ${sonyItems}`);

// Sony Available Items
//var availableSonyItems = getAvailableProducts(sonyItems);
//console.log(`Sony items (available): ${availableSonyItems}`)

// Available Adorama Items
// var adoramaItems = getItemsByAuthor(items,'Adorama Camera');
// var availableAdoramaItems = getAvailableProducts(adoramaItems);
// console.log(adoramaItems);
// console.log(`Adorama Camera (Available): ${availableAdoramaItems}`);
// no results found

// Nikon items by eBay
// var nikonItems = getItemsByBrand(items,'Nikon');
// var ebayNikonItems = getItemsByAuthor(nikonItems,'eBay');
// console.log(`Nikon by eBay items: ${ebayNikonItems}`);
//no results found

// Further 01 and 02
// console.log('Item by Brands: ' + getItemsByBrand(items,process.argv[2]));
//console.log('Item by Authors: ' + getItemsByAuthor(items,process.argv[2]));
//console.log('Available Items: '+ getAvailableProducts(items))

// Further 03
if (process.argv.length === 2) {
    console.log ("Use any of the following commands by typing the number (e.g. 1, 2):");
    console.log ("1. The number of product items");
    console.log ("2. The country of each item");
    console.log ("3. Total price of all inventory");
    console.log ("4. Search for one of the things above");
}

else if (process.argv.length === 3) {
    if (process.argv[2] === "1") {
        console.log(`The number of product items is ${getItemsCount(data)}`);
    }
    else if (process.argv[2] === "2"){
        for (let i=0;i<items.length;i++) {
            console.log(`The country of item: ${items[i].product.country}`);
        }
    }
    else if (process.argv[2] === "3") {
        let totalSum = 0;
        for (let i=0;i<items.length;i++) {
            totalSum += items[i].product.inventories[0].price;
        }
        console.log(`Total price of all inventory: ${totalSum}`);
    }
    else if (process.argv[2] === "4"){
        console.log("To search for items, you can use searchByBrand or searchByAuthor, followed by your search term.");
        console.log("E.g. searchByBrand Nikon");
    }
}
else if (process.argv.length === 4) {
    if (process.argv[2] === "searchByBrand") {
        console.log('Item by Brands:');
        var brandItems = getItemsByBrand(items,process.argv[3]);
        for (let i=0;i<brandItems.length;i++) {
            console.log(brandItems[i].product.title);
        }
    }
    else if (process.argv[2] === "searchByAuthor") {
        console.log('Item by Authors:');
        var authorItems = getItemsByAuthor(items,process.argv[3]);
        for (let i=0;i<authorItems.length;i++) {
            console.log(authorItems[i].product.title);
        }
    }
    else {
        console.log("Please enter a valid command.");
    }

}
else {
    console.log("Please enter a valid command.");
}