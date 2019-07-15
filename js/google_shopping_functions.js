const getData = require ("../products.json")

var getItems = function (data) {
    return data.items;
}
// console.log(getItems(getData));
var items = getItems(getData);

var getItemsByBrand = function (items,brand) {
    let array = [];
    for (i=0; i<items.length; i++){
        if(items[i].product.brand===brand){
            array.push(items[i]);
        }
    }
    return array;
}
// console.log(getItemsByBrand(items,"Sony"));
var getItemsByAuthor = function (items,author) {
    let array = [];
    for (i=0; i<items.length; i++){
        if(items[i].product.author.name===author){
            array.push(items[i]);
        }
    }
    return array;
}
// console.log(getItemsByAuthor(items,"eBay"));