// use require to get the json file data
const products = require('../products.json');
const package = require('../package.json')
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

//Part 1
function getItems () {
    return products.items;
    // console.log(products.items.length);
    // console.log(products.items[2].product.inventories[0].availability === 'inStock');
}
// getItems();

//Part 2
function getItemsByBrand (item, brand) {
    var brandArray = [];
    for (i=0; i<item.length; i++) {
        if (item[i].product.brand == brand) {
            brandArray.push(item[i]);
        };
    }
    console.log(`number of items by ${brand} is ${brandArray.length}`)
    return brandArray;
}

// getItemsByBrand('Nikon');

// Part 3
function getItemsByAuthor(item, author) {
    var itemsByAuthorArray =[];
    for (i=0; i<item.length; i++) {
        if (item[i].product.author.name.includes(author)) {
            itemsByAuthorArray.push(item[i]);
        };
    }
    console.log(`number of items by ${author} is ${itemsByAuthorArray.length}`);
    return itemsByAuthorArray;
};

// getItemsByAuthor('eBay');

//Part 4
function getAvailableProducts (item) {
    var availableProductArray = [];
    for (i=0; i<item.length; i++) {
        if (item[i].product.inventories[0].availability === 'inStock') {
            availableProductArray.push(item[i]);
        }
    }
    console.log(`available product count of item is: ${availableProductArray.length}`);
    return availableProductArray;
}

// getAvailableProducts();

// //Part 5
var items = getItems();

// // //All items made by Sony.
// var sonyItems = getItemsByBrand(items, 'Sony');
// console.log("items by sony listed below");
// console.log(sonyItems);
// console.log("End of Sony items array");

// // //All items made by Sony that are available.
// var availableSonyItems = getAvailableProducts(sonyItems);
// console.log("available sony items listed below");
// console.log(availableSonyItems);
// console.log("End of available Sony items array");

// //All available items by the author "Adorama Camera"
// var adoramaCameraItems = getItemsByAuthor(items, 'Adorama Camera');
// // console.log("items by author Adorama Camera listed below");
// // console.log(adoramaCameraItems);

// var availableAdorama = getAvailableProducts(adoramaCameraItems);
// console.log("available items by author Adorama Camera listed below");
// console.log(availableAdorama);
// console.log("End of available Adorama items array");


// //All items made by Nikon.
// var nikonItems = getItemsByBrand(items, 'Nikon');
// // console.log("items by Nikon listed below");
// // console.log(nikonItems);
// // All items made by Nikon with the author eBay.
// var nikonEbay = getItemsByAuthor(nikonItems,'eBay');
// console.log("nikon items by eBay listed below");
// console.log(nikonEbay);
// console.log("End of nikon by ebay items array");


// //Further
// //Give the ability for the user to give the search term in the terminal:
// //Get the process.argv[2] user input and use it as the search term input to your getItemsByBrand function.
// //If no results were found, let the user know.

// process.argv[2] = getItemsByBrand(items, process.argv[2]);

// if (process.argv[2].length === 0) {
//     console.log("No results were found");
// } else {
//     console.log(process.argv[2]);
// }


//Ask the user if they want to do or see the following things, then do that thing based on what the user entered:
if (process.argv.length === 2) {
console.log(`What would you like to search\n\n1. The number of product items\n\n2. The country of each item\n\n3. Total price of all inventory\n\n4. Search for one of the things above`)
} else if (parseInt(process.argv[2]) === 1) {
    console.log(`The number of items is ${items.length}`);
} else if (parseInt(process.argv[2]) === 2) {
    for (i=0; i<items.length; i++) {
        console.log(`${items[i].product.title} is from ${items[i].product.country}`);
    }
}else if (parseInt(process.argv[2]) === 3) {
    var totalPrice = 0;
    for (i=0; i<items.length; i++) {
        totalPrice = items[i].product.inventories[0].price + totalPrice;
    }
    console.log(`Total price of inventories is ${totalPrice.toFixed(2)} USD`);
}




// // output item count using the getItemsCount function
// var data = {}; // replace this line with the data from the require statement
// console.log('Item Count: ' + getItemsCount(data));