// use require to get the json file data

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
var data = {}; // replace this line with the data from the require statement
console.log('Item Count: ' + getItemsCount(data));
