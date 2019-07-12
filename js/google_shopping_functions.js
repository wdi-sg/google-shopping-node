// use require to get the json file data
const data = require("../products.json");
const items = getItems(data);

 // * example function called getItemsCount
 // * input: accepts full item data
 // * output: returns the length of the items array

var getItemsCount =function (itemData) {
  return itemData.items.length;
}
// console.log(getItemsCount(data))

 function getItems(itemData){
 	return itemData.items;
 }	
 
function getItemsByBrand (items, brand){
 	 items.forEach(function(element){
		 if(element.product.brand === brand){
		 	console.log (element.product.title);
		 }
	});
 }
 	 
// getItemsByBrand(items,"Samsung")

function getItemsByAuthor(items, author){
	items.forEach(function(element) {
		if(element.product.author.name.includes(author)){
			console.log(element.product.title)
		}
	});
}

// getItemsByAuthor(items,"pictureline.com")


function getAvailableProducts(items){
	items.forEach(function(element) {
		if(element.product.inventories[0].availability === "inStock"){
			console.log(element.product.title)
		}
	});
}

// getAvailableProducts(items)
// console.log(process.argv);


var brand = process.argv[2];
console.log(brand);
var brandItems = getItemsByBrand(items,brand);
// console.log(brandItems)
