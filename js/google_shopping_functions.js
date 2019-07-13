console.log("javascript works")

//This function returns the items array from the google product object
//Retrieve data from database
function getItems(itemData) {
    return itemData.items;
}

//create a function to retrieve the items by brand name
function getItemsByBrand (items, brand) {
    var brandArray = [];
    for (var i = 0; i <items.length; i++) {
        var brandsListed = itemsArray[i]["product"]["brand"];

        if (brandsListed === brand) {
            brandArray.push(itemsArray[i]);
        }
    }
return(brandArray);

}

//create a function to retrieve the items by author name

function getItemsByAuthor(items, author) {
    var authorArray = [];
    for (var i = 0; i <itemsArray.length; i++) {
        var authorListed = itemsArray[i]["product"]["author"]["name"];

        if (authorListed === author) {
            authorArray.push([itemsArray[i]);
        }
    }
return(authorArray);
}

//create a function to retrieve items by products

function getItemsByProducts (items, products) {

    var productsArray =[];
     for (var i = 0; i <items.length; i++) {
        var productsListed = itemsArray[i]["product"]["inventories"];

    for (var j = 0; j <itemsArray.length; j++) {
        var availability = inventories[j]["availability"];

        if (availability === "inStock") {
            productsArray.push(itemsArray[i]["product"]);
        }
    }
}

return(productsArray);
}


//using console.log retrieve the following items:
//1. items made by Sony
//2. items made by Sony that are available
//3. items made by author "Adorama Camera"
//4. items made by Nikon with the author eBay


// output item count using the getItemsCount function

var itemsDatabase = require('../products.json');

 // replace this line with the data from the require statement
console.log('Item Count: ' + getItemsCount(data));