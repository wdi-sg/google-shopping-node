// use require to get the json file data
let items = require('../products.json');


// to reach the elements within the array object stored in json format
let getItems = function(dataInArr){
    return dataInArr.items;
};
let dataArr = getItems(items);


// custom func to query the data
function getItemsByBrand(items, brand){
    let itemsBrandArray = [];
    for (let i=0; i < items.length; i++){
        if (items[i]['product']['brand'] == brand){
            itemsBrandArray.push(items[i])
        }
    }
    return itemsBrandArray;
};

function getItemsByAuthor(items, author){
    let itemsAuthorArr = [];
    for (let i =0; i<items.length; i++){
        if (items[i]['product']['author']['name']== author){
            itemsAuthorArr.push(items[i])
        }
    }
    return itemsAuthorArr
};

// query for items in-stock
function getAvailableProducts(items){
    let prodAvail = [];
    for (let i=0; i < items.length; i++){
        if(items[i]["product"]["inventories"][0]["availability"] == "inStock"){
            prodAvail.push(items[i]);
        }
    }
    return prodAvail;
};

// let itemsBrandArray = getItemsbyBrand(itemsArray, "Nikon");
// console.log(itemsBrandArray);

// let itemsAuthorArray = getItemsbyAuthor(itemsArray, "Target");
// console.log(itemsAuthorArray);

// let itemsAvailArray = getAvailableProducts(itemsArray);
// console.log(itemsAvailArray);

// eg., command line "node google_shopping_functions.js getItemsByBrand Nikon"
// node google_shopping_functions.js getItemsByAuthor Target
// node google_shopping_functiion.js getAvailableProducts inStock
let input1 = process.argv[2]; // query by function defined above
let input2 = process.argv[3]; // parameter for query, if not default were not defined in func


switch (input1){
    case ("getItemsByBrand"):
        console.log(getItemsByBrand(dataArr, input2))  // (datafile already assigned), input2 Nikon
        break;
    case ("getItemsByAuthor"):
        console.log(getItemsByAuthor(dataArr, input2)) // input2 Target
        break;
    case ("getAvailableProducts"):
        console.log(getAvailableProducts(dataArr, input2)) // input2, default to "inStock"
        break;
};



