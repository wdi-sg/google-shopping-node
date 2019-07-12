// use require to get the json file data
const jsonData = require('../products.json');
// console.log(jsonData);
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
//1 getItems(objectData)

function getItems(objectData) {
    return objectData.items;
}

//2.getItemsByBrand(items, brand)

function getItemsByBrand(items, brand) {
    let list = [];
    for (i = 0; i < items.length; i++) {
        if (items[i].product.brand === brand) {
            list.push(items[i]);
        }
    }
    return list;
}

//3 getItemsByAuthor(items, author)

function getItemsByAuthor(items, author) {
    let list = [];
    for (i = 0; i < items.length; i++) {
        if (items[i].product.author.name === author) {
            list.push(items[i]);
        }
    }
return list;
}

//4 getAvailableProducts(items)
function getAvailableProducts(items) {
    let list = [];
    for (i = 0; i < items.length; i++) {
        if (items[i].product.inventories[0].availability === 'inStock') {
            list.push(items[i]);
        }
    }
return list;
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// output item count using the getItemsCount function
var data = jsonData; // replace this line with the data from the require statement
console.log('Item Count: ' + getItemsCount(data));

const items = getItems(data);
// console.log(items);

let itemsByBrand = getItemsByBrand(items, 'Nikon');
// console.log(itemsByBrand);

// console.log(items[10].product.author);
let itemsByAuthor = getItemsByAuthor(items, 'CDW');
// console.log(itemsByAuthor);
// console.log(items[18]);

// console.log(items[10].product.inventories);
let availableProducts = getAvailableProducts(items);
// console.log('Available products: ' + availableProducts.length);
// console.log(availableProducts); //23

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//5
// a items by Sony
let sonyItems = getItemsByBrand(items, 'Sony');
// console.log(sonyItems);
console.log('Sony items: ' + sonyItems.length); //5

//b items by Sony that are available.
let sonyAvailable = getAvailableProducts(sonyItems);
// console.log(sonyAvailable);
console.log('Sony items available: ' + sonyAvailable.length); //4

//c items by author "Adorama Camera"
let itemsByAdorama = getItemsByAuthor(items, 'Adorama Camera');
console.log(itemsByAdorama);
console.log('Adorama items: ' + itemsByAuthor.length); //1

// items by Nikon with the author eBay.
let nikonItems = getItemsByBrand(items, 'Nikon');
console.log(nikonItems);
console.log('Nikon items: ' + nikonItems.length); //5
let nikonItemsEbay = getItemsByAuthor(nikonItems, 'CDW');
console.log(nikonItemsEbay);
console.log('Nikon items by eBay: ' + nikonItemsEbay.length); //0

for (i = 0; i < items.length; i++) {
        if (items[i].product.author.name === 'eBay') {
        console.log (items[i].product.author);
        }
}