// use require to get the json file data
const package = require('../package.json');
const products = require('../products.json');


//Get all Items
let getItems = (productsObject) => {
	let items = products.items;
	return items;
};

//Get Items by Brand
let getItemsByBrand = (userInput) => {
	const allItems = getItems(products);
	let itemsBrand = [];
	let input = userInput.toString().trim();

	allItems.forEach(function(items){
		if(items.product.brand.toLowerCase().includes(input)){
			itemsBrand.push(items);
			process.stdout.write(`\nTitle: ${items.product.title}\nBrand: ${items.product.brand}\n\n`);
		}
	})

	if (itemsBrand.length === 0) {
		process.stdout.write(`\nThere is no items of brand "${input}".\n\n`);
	}
	process.exit();
};


//Get Items by Author
let getItemsByAuthor = (userInput) => {
	const allItems = getItems(products);
	let itemsAuthor = [];
	let input = userInput.toString().trim();

	allItems.forEach(function(items){
		if(items.product.author.name.toLowerCase().includes(input)){
			itemsAuthor.push(items);
			process.stdout.write(`\nTitle: ${items.product.title}\nAuthor: ${items.product.author.name}\n\n`);
		}
	})

	if (itemsAuthor.length === 0) {
		process.stdout.write(`\nThere is no items of author "${input}".\n\n`);
	}
	process.exit();
};

//Get all available products
let getAvailableProducts = (items) => {
	let itemsAvailable = [];

	items.forEach(function(item){
		if(item.product.inventories[0].availability.toLowerCase() === 'instock'){
			itemsAvailable.push(item);
			process.stdout.write(`\nTitle: ${item.product.title}\nAvailability: ${item.product.inventories[0].availability}\n\n`);
		}
	})
	process.exit();
};

//Save Maximum Price
var price = [];


var checkPrice = (userInput) => {
	let inputMin = userInput.toString().trim();

	price.push(parseInt(inputMin))

	// console.log(price);

	const allItems = getItems(products);

	let itemPrice = [];

	allItems.forEach(function(item){
		if(item.product.inventories[0].price>=price[1] && item.product.inventories[0].price<=price[0]){
			process.stdout.write(`\nTitle: ${item.product.title}\nPrice: ${item.product.inventories[0].price}\n\n`);
			itemPrice.push(item);
		}
	})

	if(itemPrice.length === 0){
		process.stdout.write(`There is no item between ${price[1]}-${price[0]}!`);
	}

	process.exit();
};



let searchIndexRun = (userInput) => {
	const allItems = getItems(products);
	let input = userInput.toString().trim();

	switch (input){
		case '1':
			process.stdout.write(`\nTotal number of products: ${allItems.length} \n\n`);
			process.exit();

		case '2':
			allItems.forEach(function(items){
				process.stdout.write(`\nTitle: ${items.product.title}\nCountry: ${items.product.country}\n\n`);
			});	
			process.stdout.write(`\n`);
			process.exit();

		case '3':
			let totalPrice = 0;
			allItems.forEach(function(items){
				totalPrice+=items.product.inventories[0].price;
			});
			process.stdout.write(`Total Price of Inventories: ${totalPrice.toFixed(2)}\n\n`);
			process.exit();
		
		case '4':
			process.stdout.write(`List of all items:\n`);
			allItems.forEach(function(items){
				process.stdout.write(`${items.product.title}\n`);
			});
			process.stdout.write(`\n`);
			process.exit();

		case '5':
			process.stdout.write(`Enter Brand: `);
			process.stdin.on('data',getItemsByBrand);
			break;

		
		case '6':
			process.stdout.write(`Enter Author: `);
			process.stdin.on('data',getItemsByAuthor);
			break;

		case '7':
			getAvailableProducts(allItems);
			break;

		case '8':
			process.stdout.write(`Enter Maximum Price: `);
			process.stdin.on('data',function(userInput) {
				let inputMax = userInput.toString().trim();

				price.push(parseInt(inputMax));

				process.stdout.write(`Enter Minimum Price: `);
				process.stdin.on('data',checkPrice);
			});
			break;
	}
};


process.stdout.write("\nSearch by the following options: \n1.The number of product items \n2.The country of each item \n3.Total price of all inventory \n4.Search all items \n5.Search all items by brand \n6.Search all itms by author \n7.Search all available products.\n8.Search by price range. \n\nEnter the Index Number to search: ");
process.stdin.on('data',searchIndexRun);





// console.log(allItemsAvailable);

// /*
//  * example function called getItemsCount
//  * input: accepts full item data
//  * output: returns the length of the items array
//  */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }


//  * Define and use your functions here
 

// // output item count using the getItemsCount function
// var data = {}; // replace this line with the data from the require statement
// console.log('Item Count: ' + getItemsCount(data));
