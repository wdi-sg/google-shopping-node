// use require to get the json file data
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */


// function getItemsCount(itemData) {
//   return itemData.items;
// }

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function

// ## 1.) getItems(objectData)
let data = require('../products.json');

let getItems = (objData) => {
  return objData.items;
}

let itemsArray = getItems(data);

// ## 2.) getItemsByBrand(items, brand)
let getItemsByBrand  = (items, brand) => {
  let itemBrands = [];
  for(let i=0; i<items.length; i++) {
    if (items[i].product.brand === brand){
      itemBrands.push(items[i].product)
    }
  }
  return itemBrands;
}

let nikonItems = getItemsByBrand(itemsArray, 'Nikon');
// un-comment only if you want to log the function
// console.log(nikonItems);

// ## 3.) getItemsByAuthor(items, author)
let getItemsByAuthor = (items, author) => {
  let itemAuthor = [];
  for(let i=0; i<items.length; i++) {
    if (items[i].product.author.name.includes(author)){
      itemAuthor.push(items[i].product)
    }
  }
  return itemAuthor;
}

let targetItem = getItemsByAuthor(itemsArray, 'eBay');
// un-comment only if you want to log the function
// console.log(targetItem);

// ## 4.) getAvailableProducts(items)

let getAvailableProducts = (items) => {
  let availProducts = [];
  for(let i=0; i<items.length; i++) {
    if (items[i].product.inventories[0].availability === 'inStock'){
      availProducts.push(items[i].product)
    }
  }
  return availProducts;
}

let availItems = getAvailableProducts(itemsArray, 'inStock');
// un-comment only if you want to log the function
// console.log(availItems);

// ## 5.) Use your functions

// * All items made by Sony.

let sonyArray = getItemsByBrand(itemsArray, 'Sony');

// * All items made by Sony that are available.

let getAvailableSonyProducts = (brandItems) => {
    let availableSonyItems = [];
    for (let i=0; i<brandItems.length; i++) {
        if (brandItems[i].inventories[0].availability === 'inStock') {
        availableSonyItems.push(brandItems[i].title)
        }
    }
    return availableSonyItems;
}
// un-comment only if you want to log the function
// console.log(getAvailableSonyProducts(sonyArray));


// * All available items by the author "Adorama Camera"

let adoramaArray = getItemsByAuthor(itemsArray, 'Adorama Camera');

let getAvailableAdoramaProducts = (brandItems) => {
    let availableAdoramaItems = [];
    for (let i=0; i<brandItems.length; i++) {
        if (brandItems[i].inventories[0].availability === 'inStock') {
        availableAdoramaItems.push(brandItems[i].title)
        }
    }
    return availableAdoramaItems;
}
// un-comment only if you want to log the function
//prints nothing as no available order
// console.log(getAvailableSonyProducts(adoramaArray));

// * All items made by Nikon with the author eBay.

let nikonArray = getItemsByBrand(itemsArray, 'Nikon');


let getNikonItemsWitheBayAuthor = (brandItems) => {
    let nikonItemsWitheBayAuthor = [];
    for (let i=0; i<brandItems.length; i++) {
        if (brandItems[i].author.name.includes('eBay')) {
        nikonItemsWitheBayAuthor.push(brandItems[i].title)
        }
    }
    return nikonItemsWitheBayAuthor;
}
// un-comment only if you want to log the function
// console.log(getNikonItemsWitheBayAuthor(nikonArray));

// ## Further
// Give the ability for the user to give the search term in the terminal:

///////////////////////////////////////////////
//              FURTHER 1 & 2                   //
///////////////////////////////////////////////
let input1 = process.argv[2];
let input2 = process.argv[3];

let getItemBrandUsingConsole  = (items, brand) => {
  let brandArray = [];
  for(let i=0; i<items.length; i++) {
    if (items[i].product.brand === brand){
      brandArray.push(items[i].product)
    }
  }
  if (brandArray.length === 0){
    console.log('No results were found!');
  }
  return brandArray;
}

// un-comment only if you want to call the function
// getItemBrandUsingConsole(itemsArray, currentItem);

// ## Further
// Ask the user if they want to do or see the following things, then do that thing based on what the user entered:

///////////////////////////////////////////////
//              FURTHER 3                   //
///////////////////////////////////////////////

let runProgram = () => {
    if (!input1) {
        console.log('What do you want to find? \n\n1. Number of product items\n\n2. The country of each item\n\n3. Total price of all inventories');
    } else if (input1 === '1') {
        console.log(`There are ${itemsArray.length} in this object!`);
    } else if (input1 === '2') {
        let countryArray = [];
        for (let i=0; i<itemsArray.length; i++) {
            countryArray.push(itemsArray[i].product.country)
        }
        console.log(countryArray);
    } else if (input1 === '3') {
        let totalPrice = 0;
        for (let i=0; i<itemsArray.length; i++) {
            totalPrice = totalPrice + itemsArray[i].product.inventories[0].price;
        }
        console.log(`Your total price is US$ ${totalPrice.toFixed(2)}`) ;
    } else {
        console.log('Please provide a valid input!');
    }
}

// runProgram();

///////////////////////////////////////////////
//              FURTHER 4                   //
///////////////////////////////////////////////
let parsedInput1 = parseInt(input1);
let parsedInput2 = parseInt(input2);

let runProgram2 = (inputOne, inputTwo) => {
    if (!inputOne) {
        console.log('Please key in max [price] or min [price] to find items within your range. ');

    } else if (inputOne === 'max') {
        let maxArray = [];
        for (let i=0; i<itemsArray.length; i++) {
            if (itemsArray[i].product.inventories[0].price < inputTwo ) {
                maxArray.push(itemsArray[i].product.title);
            }
        }
        if (maxArray.length === 0 ) {
        console.log (`No items priced less than ${inputTwo}!`)
            }
        console.log( maxArray );

    } else if (inputOne === 'min') {
        let minArray = [];
        for (let i=0; i<itemsArray.length; i++) {
            if (itemsArray[i].product.inventories[0].price > inputTwo ) {
                minArray.push(itemsArray[i].product.title);
            }
        }
        if (minArray.length === 0 ) {
        console.log (`No items priced more than ${inputTwo}!`)
            }
        console.log( minArray );
    }
}

// runProgram2(input1, parsedInput2);

///////////////////////////////////////////////
//              FURTHER 5                   //
///////////////////////////////////////////////

let runProgram3 = (inputOne, inputTwo) => {
    if (!inputOne && !inputTwo) {
        console.log('Please enter [number1] for minimum price and [number2] for maximum price!');

    } else if (inputTwo > inputOne) {
        let finalItems = [];
        for (let i=0; i<itemsArray.length; i++) {
            let price = itemsArray[i].product.inventories[0].price;
            if (inputOne < price && inputTwo > price) {
                finalItems.push(itemsArray[i].product.title);
            }
        }
        if (finalItems.length === 0) {
            console.log('No items match your price!');
        }
        console.log(finalItems);

    } else if (inputTwo < inputOne) {
            console.log('Your second number must be greater than your first number!');

    } else {
        console.log('This should not happen');
    }
}

runProgram3(parsedInput1, parsedInput2);