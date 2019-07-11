console.log("What the hell JSON~");

// use require to get the json file data
const getObject = function(){
    return require("../products.json")
};
var object = getObject();
// console.log(object);

const getItems = function(){
    return object.items;
};
var items = getItems();
// console.log(items);


// const getObj = require("../products.json")

// const getItems = function (objectData){
//     return objectData.items;
// };
// var items = getItems(getObj);
// console.log(items[0].p);
// var brand = [];
var products = [];

const getProducts = function (){
    for (var i = 0; i < items.length; i++) {
        products.push(items[i].product);
    }
};

getProducts();
// console.log(products);

// =====================================================================================

var input = process.argv[2];

var brands = [];

const getItemsByBrand = function(items, brand){
    for (var i = 0; i < items.length; i++){

        if (items[i].product.brand === brand) {
            brands.push(items[i].product.title);

        }
    };
};

getItemsByBrand(items, input);

if (brands.length > 0) {
    // console.log(brands);
}
else {
    // console.log("no item found");
}

// =====================================================================================

var authors = [];

const getItemsByAuthorName = function(items, name){
    for (i = 0; i < items.length; i ++) {
        if (items[i].product.author.name === name){
            authors.push(items[i].product.author.accountId);
        }
    }
};

getItemsByAuthorName(items, "pictureline.com");
// console.log(authors);

// =====================================================================================

var status = [];

const getAvailableProducts = function(items) {
    for (i = 0; i < items.length; i ++){
        if (items[i].product.inventories[0].availability === "inStock") {
            status.push(items[i].product.title);
        }
    }
}

getAvailableProducts(items);
// console.log(status)

// =====================================================================================
// Ask user following things

var input0 = parseInt(process.argv[2])

var input1 = process.argv[3]

var input2 = parseInt(process.argv[4])

var input3 = process.argv[5]

if (input0 === 1) {
    console.log("No of items is:" + items.length);
}
else if (input0 === 2) {
    let country = [];

    for (i = 0; i < items.length; i++) {
        country.push(items[i].product.country)
    }

    console.log("Country of each items is: " + country);
}
else if (input0 === 3) {
    let sum = 0;

    for (i = 0; i < items.length; i ++){

        sum = sum + items[i].product.inventories[0].price
    }
    console.log("Total price for all inventory is: " + sum);
}

// =====================================================================================
// Ask user input min or max

else if (input1 === "max" && input3 !== "min"){
    let maxPrice = [];
    for (i = 0; i < items.length; i ++) {
        if (items[i].product.inventories[0].price < input0) {
        maxPrice.push(items[i].product.inventories[0].price)
        }
    }
    console.log("input0: " + input0);
    console.log("max price is: " + maxPrice);
}
else if (input1 === "min" && input3 !== "max" ){
    let minPrice = [];
    for (i = 0; i < items.length; i ++) {
        if (items[i].product.inventories[0].price > input0) {
        minPrice.push(items[i].product.inventories[0].price)
        }
    }
    console.log("input0: " + input0);
    console.log("min price is: " + minPrice);
}

// =====================================================================================
// Ask user input min and max

else if (input1 === "min" && input3 === "max"){
    let range = [];
    for (i = 0; i < items.length; i ++) {
        if (items[i].product.inventories[0].price > input0 && items[i].product.inventories[0].price < input2) {
            range.push(items[i].product.inventories[0].price)
        }
    }
    console.log("range: " + range);
}
else {
    console.log("1. No of product items");
    console.log("2. Country of each item");
    console.log("3. Total price of all inventory");
};