// use require to get the json file data
var products = require('../products.json')

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

// part 1: getItems(objectData) - Create a function called getItems that simply returns the items array from the google product object.

let getItems = objectData => {
  return objectData.items;
}

//part 2: getItemsByBrand(items, brand) - Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

let getItemsByBrand = (obj, brand) => {
  let itemBrands = [];
  let arr = getItems(obj);
  for(let i=0; i<arr.length; i++) {
    if (arr[i].product.brand === brand){
      itemBrands.push(arr[i].product.title)
    }
  }
  return itemBrands;
}

//part 3: getItemsByAuthor (items, author) - Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

let getItemsByAuthor = (obj,author) => {
    let itemAuthors= [];
    let arr = getItems(obj);
    for(let i=0; i<arr.length; i++) {
        if (arr[i].product.author.name.includes(author)) {
          itemAuthors.push(arr[i].product.title)
        }
  }
  return itemAuthors;
}

//part 4: getAvailableProducts(items) - Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

let getAvailableProducts = obj => {
    let instock = [];
    let arr = getItems(obj);
     for(let i=0; i<arr.length; i++) {
        if (arr[i].product.inventories[0].availability === "inStock") {
          instock.push(arr[i].product.title)
        }
  }
  return instock;
}

//using all da functions

//all items made by Sony
console.log(getItemsByBrand(products, 'Sony'));

//all items made by Sony that are available;
let availSony = []
let allSony = getItemsByBrand(products, 'Sony');
let allInstock= getAvailableProducts(products);
for (let i=0; i < allInstock.length; i++) {
    for (let j=0; j < allSony.length; j++) {
        if (allSony[j] === allInstock[i]) {
            availSony.push(allSony[j]);
        }
    }
}
console.log(availSony);

//all available items by the author "Adorama Camera"
console.log(getItemsByAuthor(products, 'Adorama Camera'));

//all items made by Nikon with the author eBay.
let nikonByEbay = [];
let allNikon = getItemsByBrand(products, 'Nikon');
let alleBay = getItemsByAuthor(products, 'eBay');
for (let i=0; i < alleBay.length; i++) {
    for (let j=0; j < allNikon.length; j++) {
        if (allNikon[j] === alleBay[i]) {
            nikonByEbay.push(allNikon[j]);
        }
    }
}
console.log(nikonByEbay);