// use require to get the json file data

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

// step 1 get json
const products = require('../products.json');
// console.log('json', products);

// step 2.
var getItems = function (objectData) {
  return (objectData.items);
}

var items = getItems(products);
// console.log(items);

/////////////////////////////////////////////////////////

var getItemsByBrand = function (items, brand) {
  var brandItems = [];
  //console.log(objectData.items);
  for (var i = 0; i < items.length; i++ ) {
    //console.log(items[i].product.brand);
    if (items[i].product.brand == brand) {
        //brandItems.push(items[i].product.title);
        brandItems.push(items[i]);
    }
  }
  return brandItems;
}

//var itemsBrand = getItemsByBrand(items, 'Sony');
// console.log(itemsBrand);

/////////////////////////////////////////////////////////

var getItemsByAuthor = function (items, author) {
    var authorItems = [];

    for (var i = 0; i < items.length; i++ ) {
        if (items[i].product.author.name.includes(author)) {
            authorItems.push(items[i].product.title);
        }
    }
    return authorItems;
}

var itemsAuthor = getItemsByAuthor(items, 'CDW');
// console.log(itemsAuthor);

/////////////////////////////////////////////////////////
// 5) Use your functions

// ############### All items made by Sony.###############
// console.log(itemsBrand);
/*
[
  'Sony RX100 Black CyberShot Digital Camera - DSCRX100B',
  'Sony Alpha DSLR SLT-A77 Translucent Mirror Digital Camera, 24.3MP, 12fps, OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19-point Auto Focus',
  'Sony Alpha Nex-7 Digital Camera (black, Body Only)',
  'Sony Alpha NEX-5R Digital Camera Body & E 18-55mm OSS Lens (Black) Kit',
  'Sony Alpha NEX-3N Mirrorless Digital Camera with 16-50mm Lens (Black)'
]
*/


// ############### All items made by Sony that are available. ###############
var getItemsInStock =function (itemsSony) {
    var inStock = [];
    for (var i = 0; i < itemsSony.length; i++ ) {
        if (itemsSony[i].product.inventories[0].availability === 'inStock' ) {
            inStock.push(itemsSony[i].product.title);
        }
    }
    return inStock;
    // console.log(inStock);
}

//var inStockItemsSony = getItemsInStock(itemsBrand);
// console.log(inStockItemsSony);
/*
[
  'Sony RX100 Black CyberShot Digital Camera - DSCRX100B',
  'Sony Alpha Nex-7 Digital Camera (black, Body Only)',
  'Sony Alpha NEX-5R Digital Camera Body & E 18-55mm OSS Lens (Black) Kit',
  'Sony Alpha NEX-3N Mirrorless Digital Camera with 16-50mm Lens (Black)'
]
*/

// ############### All available items by the author "Adorama Camera" ###############
//var itemsAuthorAdoramaCamera = getItemsByAuthor(items, 'Adorama Camera');
// console.log(itemsAuthorAdoramaCamera);
/*
[
  'Sony Alpha DSLR SLT-A77 Translucent Mirror Digital Camera, 24.3MP, 12fps, OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19-point Auto Focus'
]
*/



// ############### All items made by Nikon with the author eBay. ###############
//var itemsBrand = getItemsByBrand(items, 'Nikon');
//var itemsNikonEbay = getItemsByAuthor(itemsBrand, 'eBay');
// console.log(itemsNikonEbay);
/*
[
  'Nikon 1 S1 10.1 Mp Digital Camera - Red (w/ 11-27.5mm And Vr 30-110mm Lenses)',
  'Nikon  D7100 Body 24.1-megapixel Digital Camera'
]
*/

// ############### Give the ability for the user to give the search term in the terminal ###############
// node js/google_shopping_functions.js Nikon
// Get the process.argv[2] user input and use it as the search term input to your getItemsByBrand function.

var userInput = process.argv[2];
var itemsBrand = getItemsByBrand(items, userInput);

for (var i = 0; i < itemsBrand.length; i++ ) {
    var displayNikon = [];
    displayNikon.push(itemsBrand[i].product.title);
    console.log(displayNikon);
}
/*
[ 'Nikon D800 SLR Digital Camera Body' ]
[
  'Nikon 1 S1 10.1 Mp Digital Camera - Red (w/ 11-27.5mm And Vr 30-110mm Lenses)'
]
[ 'Nikon D3100 SLR Digital Camera with 18-55mm VR Lens' ]
[ 'Nikon Digital Cameras; 1 S1, With 11-27.5mm NIKKOR Lens, Black' ]
[ 'Nikon  D7100 Body 24.1-megapixel Digital Camera' ]
*/


// ############### If no results were found, let the user know.###############
var userInput = process.argv[2];
var itemsBrand = getItemsByBrand(items, userInput);

if (itemsBrand.length !== 0) {
    for (let i = 0; i < itemsBrand.length; i++ ) {
        var displayResults = [];
        displayResults.push(itemsBrand[i].product.title);
        // console.log(displayResults);
    }
} else {
    // console.log('no items found');
}



// ############### 1. The number of product items ###############
var getItemsCount = function (itemData) {
  return itemData.length;
}

var getCountry = function (itemData) {
    var findCountry = [];
    for (let i = 0; i < itemData.length; i++ ) {
        findCountry.push(itemData[i].product.country);
    }
    return findCountry;
}

var getSumOfAllItemsPrice = function (itemData) {
    var allPrice = [];
    var sum = 0;
    for (let i = 0; i < itemData.length; i++ ) {
        allPrice.push(parseFloat(itemData[i].product.inventories[0].price));
        sum = sum + allPrice[i];
    }
    // return allPrice;
    return sum;
}


var minPrice = function(itemData) {
    var allPrice = [];
    for (let i = 0; i < itemData.length; i++ ) {
        allPrice.push(parseFloat(itemData[i].product.inventories[0].price));

        // Check for min price
        var min = allPrice.reduce(function(a, b) {
            return Math.min(a, b);
        });
    }
    return min;
    // return allPrice;
}

var maxPrice = function(itemData) {
    var allPrice = [];
    for (let i = 0; i < itemData.length; i++ ) {
        allPrice.push(parseFloat(itemData[i].product.inventories[0].price));

        // Check for min price
        var max = allPrice.reduce(function(a, b) {
            return Math.max(a, b);
        });
    }
    return max;
    // return allPrice;
}


var listAllPrice = function(itemData) {
    var allPrice = [];
    for (let i = 0; i < itemData.length; i++ ) {
        allPrice.push(parseFloat(itemData[i].product.inventories[0].price));
    }
    return allPrice;
}

var pricePoint = function(allPrices, myPoint) {
    var myPrice = [];
    for (let i = 0; i < allPrices.length; i++ ) {
        if (allPrices[i] <= myPoint) {
            myPrice.push(allPrices[i]);
        }
    }
    return myPrice;
}


var minMaxPrice = function(allPrices, myMin, myMax) {
    var myRangePrice = [];
    for (let i = 0; i < allPrices.length; i++ ) {
        if ((allPrices[i] >= myMin) && (allPrices[i] <= myMax)) {
            myRangePrice.push(allPrices[i]);
        }
    }
    return myRangePrice;
}


var getBudgetPrice = function(itemsData, myMin, myMax) {
    var myPriceRange = [];
    var allPrices = [];
    var rangeTitle = [];

    for (let i = 0; i < itemsData.length; i++ ) {
       // Store all the prices in an array
        allPrices.push(parseFloat(itemsData[i].product.inventories[0].price));
        // check if prices falls within my range
        if ((allPrices[i] >= myMin) && (allPrices[i] <= myMax)) {
            // if within range, store these prices in myPriceRange array
            myPriceRange.push(allPrices[i]);
            // if within range, store the title of product in rangeTitle array
            rangeTitle.push(itemsData[i].product.title);
        }
    }
}



// var myShoppingList = {
//     price: getBudgetPrice
//     //title: getProductTitle
// }




var myObj = {
    count: getItemsCount,
    country: getCountry,
    price: getSumOfAllItemsPrice,
    cheap: minPrice,
    ex: maxPrice,
    all: listAllPrice,
    point: pricePoint,
    deal: minMaxPrice,
    budget: getBudgetPrice
}

var userInput = process.argv[2];
// var price = process.argv[3];
var minPrice = process.argv[3];
var maxPrice = process.argv[4];

// var countProducts = myObj[userInput](items);
// console.log('Total no. of product items: ' + countProducts);
// node js/google_shopping_functions.js count
// The number of product items: 25

// var searchCountry = myObj[userInput](items);
// console.log('Country: ' + searchCountry);
// node js/google_shopping_functions.js country
// Country: US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US,US

// var totalPrice = myObj[userInput](items);
// console.log('Total Price of All Items: $' + totalPrice);
// node js/google_shopping_functions.js price
// Total Price of All Items: $20946

// var cheapest = myObj[userInput](items);
// console.log('The cheapest item costs: $' + cheapest);
// node js/google_shopping_functions.js cheap
// The cheapest item costs: $399.99

// var dearest = myObj[userInput](items);
// console.log('The most expensive item costs: $' + dearest);
// node js/google_shopping_functions.js ex
// The most expensive item costs: $2796.95

// var allPrices = myObj[userInput](items);
// console.log('Listing all Prices: ' + allPrices);
// node js/google_shopping_functions.js all
// Listing all Prices: 2796.95,648,898,429.99,430,399.99,653.49,899.99,529.95,1599.95,956.99,465,749.99,2373.33,599.95,499.99,448,549.99,449.95,1196.95,449.99,899.95,749.99,589.99,697.99

// var gdPrice = myObj[userInput]((listAllPrice(items)),price);
// console.log('Good Prices: ' + gdPrice);
// node js/google_shopping_functions.js point 500
// Good Prices: 429.99,430,399.99,465,499.99,448,449.95,449.99

// var myDeal = myObj[userInput](listAllPrice(items),minPrice,maxPrice);
// console.log("Good Deal: " + myDeal);
// node js/google_shopping_functions.js deal 500 800
// Good Deal: 648,653.49,529.95,749.99,599.95,549.99,749.99,589.99,697.99


var myBudget = myObj[userInput](listAllPrice(items),minPrice,maxPrice);
console.log("Budget Items: " + myBudget);



// ############### 1. The number of product items ###############










// var items = getItems(products);

// console.log(items);


/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
// var data = {}; // replace this line with the data from the require statement
// console.log('Item Count: ' + getItemsCount(data));