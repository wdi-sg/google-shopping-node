// use require to get the json file data
var data = require("./../products")
// console.log(data);

//returns length of array
var num = data.items.length;
// console.log(data.items[0].product.inventories[0].availability)

//to get item data from products.json
var getData = function(data){
  return data.items;
}
var googleProductData = getData(data)
console.log(googleProductData);
console.log(googleProductData.length);

//getting items by brand
var getItemsByBrand = function (googleProductData, input){
  var arrayList = [];
    for (var i = 0; i < googleProductData.length; i++){
      if (googleProductData[i].product.brand === input){
         arrayList.push (googleProductData[i].product.title);
      }
    }
  return arrayList;
}
console.log("Items by Sony: "+ getItemsByBrand(googleProductData, "Sony"))

//getting items by author
var getItemsByAuthor = function (googleProductData,input){
  var arrayList = [];
    for (var i = 0; i < googleProductData.length; i++){
      if (googleProductData[i].product.author.name.includes(input)){
         arrayList.push (googleProductData[i].product.title);
      }
    }
  return arrayList;
}
console.log("Items sold by eBay: " + getItemsByAuthor(googleProductData, "eBay"));
console.log("Items sold by eBay: " + getItemsByAuthor(googleProductData, "Nikon"));

//getting items by availability sorted by author or brand
var getAvailableProducts = function (input){
  var arrayList = [];
  for (var i = 0; i < data.items.length; i++){
    if ((googleProductData[i].product.inventories[0].availability === "inStock" && googleProductData[i].product.author.name.includes(input)) || (googleProductData[i].product.inventories[0].availability === "inStock" && googleProductData[i].product.brand === input)){
      arrayList.push (data.items[i].product.title);
    }
  }
  return arrayList;
}
//nothing will show because adorama camera item is on backorder
console.log("Available items by Adorama Camera: " + getAvailableProducts("Adorama Camera"));
console.log("Available items by Sony: " + getAvailableProducts("Sony"));

//using ES6 syntax arrow functions
console.log("Items made by Nikon with the author eBay: " + getItemsByBrand(googleProductData, "Nikon").filter(item => getItemsByAuthor(googleProductData, "eBay").includes(item)));
//doing it old school
console.log("Items made by Nikon with the author eBay: " + getItemsByBrand(googleProductData, "Nikon").filter(function (item) {
  return getItemsByAuthor(googleProductData, "eBay").includes(item)
}));





var searchFunctions = {
  getItems: function(data){
    return data;
  },
  getItemsByBrand: function(input){
    var arrayList = [];
    for (var i = 0; i < data.items.length; i++){
      if (data.items[i].product.brand === input){
         arrayList.push (data.items[i].product.title);
      }
    }
    return arrayList;
  },
  getItemsByAuthor: function(input){
    var arrayList = [];
    for (var i = 0; i < data.items.length; i++){
      if (data.items[i].product.author.name.includes(input)){
        arrayList.push (data.items[i].product.title);
      }
    }
    return arrayList;
  },
  getAvailableProducts: function(input1, input2){
    var arrayList = [];
    if (input1 === undefined && input2 === undefined){
      console.log("no input detected")
      for (var i = 0; i < data.items.length; i++){
        if (data.items[i].product.inventories[0].availability === "inStock"){
          arrayList.push (data.items[i].product.title);
        }
      }
    }else {
      for (var i = 0; i < data.items.length; i++){
        if (data.items[i].product.brand.includes(input1) && data.items[i].product.inventories[0].availability === "inStock"){
          arrayList.push (data.items[i].product.title);
        }
      }
    }
    return arrayList;
  }
}


console.log(searchFunctions[process.argv[2]] (process.argv[3],process.argv[4]) );
