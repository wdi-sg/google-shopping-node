

// use require to get the json file data

const data = require('../products.json');

let items;

/* Define and use your functions here */

function getItemsCount(itemData) {
    return itemData.length;
}

// getItems(objectData)
const getItems = (data) => {
    items = data.items;
    return items;
}

// getItemsByBrand(items, brand)
const getItemsByBrand = (data, brands) => {

  let newArray = [];

  for (let i = 0; i < data.length; i ++ ) {
    if (data[i].product.brand === brands) {
      newArray.push(data[i]);
    }
  }
  return newArray;
}

// getItemsByAuthor(items, author)
const getItemsByAuthor = (data, author) => {
    let newArray = [];

    for (let i = 0; i < data.length; i ++ ) {
        if (data[i].product.author = author) {
        newArray.push(data[i]);
        }
    }
  return newArray;
}

// getAvailableProducts(items)
const getAvailableProducts = (data) => {
    let newArray = [];

    for (let i = 0; i < data.length; i ++) {
        if (data[i].product.inventories[0].availability === "inStock") {
        newArray.push(data[i]);
        }
    }
    return newArray;
}


// output item count using the getItemsCount function
// var data = {dataJson}; // replace this line with the data from the require statement
console.log('Item Count: ' + getItemsCount(data));

console.log(getItems(data))
// console.log(items)
// console.log(getItemsByBrand(items, "Sony"))
// console.log(getItemsByAuthor(items, "Target"))
// console.log(getAvailableProducts(items))


//----- All items made by Sony -----//
// console.log("ALL ITEMS MADE BY SONY:")
// let sonyProducts = getItemsByBrand(items,"Sony")
// console.log(sonyProducts)
// console.log('Item Count: ' + getItemsCount(sonyProducts))


//----- All items made by Sony that are available -----//
// console.log("ALL AVAILABLE SONY ITEMS:")
// let sonyProducts = getItemsByBrand(items,"Sony");
// let availableSony = getAvailableProducts(sonyProducts);
// console.log(availableSony);
// console.log('Item Count: ' + getItemsCount(availableSony))


//----- All available items by the author "Adorama Camera" -----//
// console.log("ALL AVAILABLE ITEMS BY ADORAMA CAMERA");
// let adoramaCamera = getItemsByAuthor(items, "Adorama Camera")

// console.log(adoramaCamera);
// console.log('Item Count: ' + getItemsCount(adoramaCamera));


// //----- All items made by Nikon with the author eBay -----//
// console.log("ALL NIKON BY eBay");
// let nikonProducts = getItemsByBrand(items, "Nikon");
// let nikonEbay = getItemsByAuthor(nikonProducts, "eBay");
// console.log(nikonEbay)
// console.log('Item Count: ' + getItemsCount(nikonEbay));


//----- Further -----//
// Give the ability for the user to give the search term in the terminal:
// Give the ability for the user to give the search term in the terminal:


// console.log("===============LOOK BELOW=============")
// console.log(getItemsByBrand(items,process.argv[2]))


//----- Further -----//
// If no results were found, let the user know.

// console.log("===============LOOK BELOW=============")
// const productNotFound = (items, brand) => {

//     let searchByBrand = getItemsByBrand(items,process.argv[2]);

//     if (searchByBrand.length === 0) {
//         console.log('Sorry but no such products are found!')
//     }
// }

// console.log(productNotFound(items, process.argv[2]))


myObject = {
    searchByBrand : getItemsByBrand,
    searchByAuthor : getItemsByAuthor,
    searchAvailableProducts : getAvailableProducts,
}

let whatToDo = process.argv[2];
let brandToSearch = process.argv[3];

console.log(myObject[whatToDo](items,brandToSearch))














// dsfasfsafas