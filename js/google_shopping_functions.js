const object = require("../products.json")

// // console.log(object);

// //get all the item in object and return in an array of items

// part 1
const getItems = (object) =>{
    let itemArray =[]
    //loop through the items
    for (var i = 0; i < object.items.length; i++) {
        //push each of the item product into itemArray
        itemArray.push(object.items[i].product);
    }
    return itemArray;
};
// console.log (getItems(object));

//the json object is not stored as an array in product and ready for use
let product = getItems(object);


// part 2

//argv[2] will be use for inputing of values later on

// let brand = process.argv[2];
// // empty array to store title of brands
// let titleOfBrand =[];

// const getItemsByBrand =(product, brand)=> {
//     for (var i = 0; i < product.length; i++) {
//         if (product[i].brand === brand) {
//             titleOfBrand.push(product[i].title)
//         }
//     }
//     return titleOfBrand;
// }

// console.log(getItemsByBrand(product, brand));


//part 3
// getting items by author


//argv[2] will be use for inputing of values later on

let author = process.argv[2];
// empty array to store title of brands
let titleOfBook =[];

const getItemsByAuthor = (product, author) => {
    for (var i = 0; i < product.length; i++) {
        if (product[i].author.name === author) {
            titleOfBook.push(product[i].title)
        }
    }
    return titleOfBook;
}

console.log(getItemsByAuthor(product, author))