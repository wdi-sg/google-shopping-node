
// use require to get the json file data
var products = require('../products.json');
//console.log(products);

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}
//console.log(getItemsCount(products)); //25


//PART I
function getItems (itemData){
    return itemData["items"];
}
//console.log(getItems(products));


//PART II
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
//console.log(getItemsByBrand(getItems(products), "Sony"));


//PART III
function getItemsByAuthor (itemData, author){
    let items = [];
    for (var i = 0; i<itemData.length; i++){
        if (itemData[i]["product"]["author"]["name"].replace(/\s/g, '').toLowerCase() === author.replace(/\s/g, '').toLowerCase()){
            items.push(itemData[i]);
        }
    }
    return items;
}

//console.log(getItemsByAuthor(getItems(products), "Target"));


//PART IV
function getAvailableProducts (itemData){
    let items = [];
    for (var i = 0; i<itemData.length; i++){
        if (itemData[i]["product"]["inventories"][0]["availability"]==="inStock"){
            items.push(itemData[i]);
        }
    }
    return items;
}

//console.log(getAvailableProducts(getItems(products)));


/*
* Define and use your functions here
*/
let itemCount = getItemsCount(products);
console.log("Item count: ", itemCount);


//PART V
var items = getItems(products);

// All items made by Sony.
var sonyItems = getItemsByBrand(items, "sony");
//****console.log(sonyItems);

// All items made by Sony that are available.
//****console.log(getAvailableProducts(sonyItems));

// All available items by the author "Adorama Camera"
//****console.log(getItemsByAuthor(items, "adorama camera"))

// All items made by Nikon with the author eBay.
var nikonItems = getItemsByBrand(items, "Nikon");

//****console.log(getItemsByAuthor(nikonItems, "eBay"));



//FURTHER
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
//****console.log(getItemsByBrand(getItems(products), brand));


//FURTHER
var brand = process.argv[2];
function getItemsByBrand (itemData, brand){
    let items = [];
    for (var i = 0; i<itemData.length; i++){
        if(itemData[i]["product"]["brand"].toLowerCase() === brand.toLowerCase()){
            items.push(itemData[i]);
        } else {
            return 'No results found.';
        }
    }
    return items;
}
//****console.log(getItemsByBrand(items, brand));



//FURTHER - Max OR Min
var priceDirection = process.argv[2];
var maxPrice = process.argv[3];

function getItemsByMaxPrice (itemData){
    let items = [];
    if (priceDirection === "max"){
        for (var i = 0; i<itemData.length; i++){
            if (itemData[i]["product"]["inventories"][0]["price"] <= maxPrice){
                items.push(itemData[i]);
                }
            }
            return items;
        }
    }
//****console.log(getItemsByMaxPrice(items));

var priceDirection = process.argv[2];
var minPrice = process.argv[3];

function getItemsByMinPrice (itemData){
    let items = [];
    if (priceDirection === "min"){
        for (var i = 0; i<itemData.length; i++){
            if (itemData[i]["product"]["inventories"][0]["price"] >= minPrice){
                items.push(itemData[i]);
                }
            }
            return items;
        }
    }
//****console.log(getItemsByMinPrice(items));



//FURTHER - Max AND Min
var inputLength = process.argv.length;
var minIndicator = process.argv[2];
var minPrice = process.argv[3];
var maxIndicator = process.argv[4];
var maxPrice = process.argv[5];

function getItemsByMinAndMaxPrice (itemData){
    let items = [];
    if (inputLength === 6){
        if (minIndicator === "min" && maxIndicator === "max"){
        for (var i = 0; i<itemData.length; i++){
            if (itemData[i]["product"]["inventories"][0]["price"] >= minPrice && itemData[i]["product"]["inventories"][0]["price"] <= maxPrice){
                items.push(itemData[i]);
                    }
                }
                return items;
            }
        }
    }
console.log(getItemsByMinAndMaxPrice(items));