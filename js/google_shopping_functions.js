// use require to get the json file data
var products = require("../products.json");

var getItems = function(obj){
    return obj.items;
}

var arrayOfObjects = getItems(products);

var getItemsByBrand = function(items,brand){
    let arr = [];

    for(let i=0;i<items.length;i++){
        if(items[i].product.brand === brand)
            arr.push(items[i]);
    }

    return arr;
}

var getItemsByAuthor = function(items,author){
    let arr = [];
    for(let i=0;i<items.length;i++){
        if(items[i].product.author.name.includes(author))
            arr.push(items[i]);
    }
    return arr
}

var getAvailableProducts = function(items){

    let arr = [];
    for(let i=0;i<items.length;i++){
        if(items[i].product.inventories[0].availability === "inStock");
            arr.push(items[i]);
    }
    return arr
}

let input1 = process.argv[2];
let input2 = process.argv[3];
let input3 = process.argv[4];

var showInstructions = function(){
    console.log("Please enter a number followed by your executing command to do the following:\n\n1. Number of products\n2. Country of each item\n3. Total price of all inventory\n4. Search for one of the things above\n\nFor example: 'node/google_shopping_functions.js 2' to check country of each item\n\nYou can also execute the command followed by the following to check specific results. [value] will be the things that you will like to check:\n\nmaxPrice [value]\nminPrice [value]\nminMax [min value] [max value]\nsearchByBrand [value]\nsearchByAuthor [value]\ngetAvailableProducts");
}

var numberOfProductItems = function(arr){
    return arr.length
}

var countryOfEachItem = function(arr){
    let result = "";
    for(let i=0;i<arr.length;i++){
        result +=`${arr[i].product.title} - ${arr[i].product.country}\n`;
    }
    return result;
}

var totalPriceOfAllInvetory = function(arr){
    sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i].product.inventories[0].price;
    }
    return sum;
}

var maxPrice = function(arr,max){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].product.inventories[0].price<=max)
            result.push(arr[i]);
    }
    return result;
}

var minPrice = function(arr,max){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].product.inventories[0].price>=max)
            result.push(arr[i]);
    }
    return result;
}

var minMax = function(arr,min,max){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].product.inventories[0].price<=max && arr[i].product.inventories[0].price>=min)
            result.push(arr[i]);
    }
    return result;
}

if(input1 === undefined){
    showInstructions();
}else{
    if(input1 == 1){
        console.log("Number of product items: "+numberOfProductItems(arrayOfObjects));
    }else if(input1 == 2){
        console.log(countryOfEachItem(arrayOfObjects));
    }else if(input1 == 3){
        console.log("Total price of all inventory = "+totalPriceOfAllInvetory(arrayOfObjects).toFixed(2)+" USD");

    }else if(input1 === "maxPrice"){
        console.log(maxPrice(arrayOfObjects,parseInt(input2)));
    }else if(input1 === "minPrice"){
        console.log(minPrice(arrayOfObjects,parseInt(input2)));
    }else if(input1 === "minMax"){
        console.log(minMax(arrayOfObjects,parseInt(input2),parseInt(input3)));
    }else if(input1 === "searchByBrand"){
        console.log(getItemsByBrand(arrayOfObjects,input2));
    }else if(input1 === "searchByAuthor"){
        console.log(getItemsByAuthor(arrayOfObjects,input2));
    }else if(input1 === "getAvailableProducts"){
        console.log(getAvailableProducts(arrayOfObjects,input2));
    }else{
        console.log("Invalid Input bro");
    }
}



// let listOfProducts = getItemsByBrand(getItems(products), inputBrand);

// if(listOfProducts.length === 0){
//     console.log("No results were found");
// }else{
//     console.log(listOfProducts);
// }

