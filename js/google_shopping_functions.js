// use require to get the json file data
// console.log(process.argv)

var data = require('../products.json');
// console.log(data);


var getProduct = function(){
    return data.items
}

// console.log(getProduct());
var brand = [];
var getProductByBrand = function(array,brandName){
    // var specificBrand = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].product.brand === brandName){
            brand.push(array[i]);
        }
    }
    return brand;
}

getProductByBrand(getProduct(),"Sony");


var specificAuthor = [];
var getProductByAuthor = function(array,authorName){
    for (let i = 0; i < array.length; i++){
        if (array[i].product.author.name === authorName){
            specificAuthor.push(array[i]);
        }
    }
    return specificAuthor;
}
console.log(getProductByAuthor(sonyBrand,"eBay"));

var getProductByAvailability = function(array){
    var availableSonyProduct = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].product.inventories[0].availability === "inStock"){
            availableSonyProduct.push(array[i]);
        }
    }
    return availableSonyProduct;
}

// console.log(getProductByAvailability(sonyBrand,"inStock"))

// var myObj =
// {
//     data : getProduct(),
//     brand : getProductByBrand(),
//     author : getProductByAuthor(),
//     availability: getProductByAvailability()
// }

// module.export = myObj;

// console.log(getProductByAvailability(sonyBrand,"inStock"))


// var brand = process.agrv[2];

// var getItemsByBrand = function(brand){
//     for(let i = 0; i < itemData.items.bran)
// }
// console.log(getItemsByBrand(data,"Sony"));

// without parameter
// var getItems = function() {
//     return data.items
// }

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */


/*
 * Define and use your functions here
 */

// // output item count using the getItemsCount function
// var data = {}; // replace this line with the data from the require statement
// console.log('Item Count: ' + getItemsCount(data));