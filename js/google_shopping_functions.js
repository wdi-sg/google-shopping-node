// use require to get the json file data
const mainData = require('../products.json');

const productData = mainData;

function getItems(data){
  return data.items;
};
const itemsInData = getItems(productData)
//console.log(itemsInData)
///////////////////////////////////////////////////////////////////////////////////////////

function getItemsCount(items) {
  return items.length;
};
const itemsCount = getItemsCount(itemsInData);
//console.log('Item Count: ' + itemsCount);
///////////////////////////////////////////////////////////////////////////////////////////

function getItemsByBrand(dataitems, brand){
    dataitems.forEach(function(item) {
        if(item["product"]["brand"].toLowerCase() === brand.toLowerCase()) {
            console.log(item)
            // return item
    }})
};

//console.log(getItemsByBrand(getItems(productData), process.argv[2]))
//console.log(sonyItems)
///////////////////////////////////////////////////////////////////////////////////////////

function getItemsByAuthor(dataitems, author){
    dataitems.forEach(function(index) {
        if(index["product"]["author"]["name"].includes(author)) {

            console.log(item)
    }})
};
console.log(getItemsByAuthor(getItems(productData), process.argv[2]))

///////////////////////////////////////////////////////////////////////////////////////////

function getAvailableProducts(items){
    items.forEach(function(index) {
        if(index["product"]["inventories"][0]["availability"] === "inStock") {
         console.log(index)
    }})
};



//
// const itemsByAuthor = getItemsByAuthor(itemsInData, "Adorama Camera");
// const availableProducts = getAvailableProducts(itemsInData);
// console.log(getItems(productData))



// console.log(getAvailableProducts(getItems(productData)))