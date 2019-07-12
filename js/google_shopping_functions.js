// Deliverables 1.) getItems(objectData)
const objectData = require('../products.json');

function getItems() {
  return objectData.items
}

var googleGetItems = getItems();


// Deliverables 2.) getItemsByBrand(items, brand)
function getItemsByBrand(items, brand) {

  var itemArray = [];
  var itemLength = items.length;

  for (i = 0; i < itemLength; i++){
    var brandFound = items[i].product.brand;
    if (brand === brandFound) {
      itemArray.push(items[i].product);

    } // end of checking
  } // end of for loop
  return itemArray;
} // end of function

var googleItemsBrand = getItemsByBrand(googleGetItems, process.argv[2]);

// console.log(googleItemsBrand);


// Deliverables 3) getItemsByAuthor(items, author):
var getItemsByAuthor = function(items, author) {
  var itemArray = [];
  var itemLength = items.length;

  for (i = 0; i < itemLength; i++){
    var AuthorFound = items[i].product.author.name;
    if (author === AuthorFound) {
      itemArray.push(items[i]);

    } // end of checking
  } // end of for loop
  return itemArray;
} // end of function

var googleItemsAuthor = getItemsByAuthor(googleGetItems, process.argv[2]);

// console.log(googleItemsAuthor)

// Deliverables  4) getAvailableProducts(items):

var getAvailableProducts = function(items) {
  var itemArray = [];
  var itemLength = items.length;

  for (i = 0; i < itemLength; i++){
    var productInStock = items[i].product.inventories[0].availability;
    if ( productInStock === "inStock") {
      itemArray.push(items[i]);

    } // end of checking
  } // end of for loop
  return itemArray;
}; // end of function

var googleAvaliableProducts = getAvailableProducts(googleGetItems);

// console.log(googleAvaliableProducts);

// Deliverables 5) Use your functions

// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.

// All items made by Sony.
// console.log(getItemsByBrand(googleGetItems, 'Sony'));
// [ 'Sony RX100 Black CyberShot Digital Camera - DSCRX100B',
//   'Sony Alpha DSLR SLT-A77 Translucent Mirror Digital Camera, 24.3MP, 12fps, OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19-point Auto Focus',
//   'Sony Alpha Nex-7 Digital Camera (black, Body Only)',
//   'Sony Alpha NEX-5R Digital Camera Body & E 18-55mm OSS Lens (Black) Kit',
//   'Sony Alpha NEX-3N Mirrorless Digital Camera with 16-50mm Lens (Black)' ]

// All items made by Sony that are available.
// console.log(getItemsByBrand(googleAvaliableProducts, 'Sony'));
// [ 'Sony RX100 Black CyberShot Digital Camera - DSCRX100B',
//   'Sony Alpha Nex-7 Digital Camera (black, Body Only)',
//   'Sony Alpha NEX-5R Digital Camera Body & E 18-55mm OSS Lens (Black) Kit',
//   'Sony Alpha NEX-3N Mirrorless Digital Camera with 16-50mm Lens (Black)' ]

// All available items by the author "Adorama Camera"
console.log(getItemsByAuthor(googleAvaliableProducts,'Adorama Camera'));
// - No output as the items are in backorder

// All items made by Nikon with the author eBay.

var nikonArray = getItemsByBrand(googleGetItems,'Nikon');

// console.log(nikonArray);

var getItemseBay = function(items, author) {
  var itemArray = [];
  var itemLength = items.length;

  for (i = 0; i < itemLength; i++){
    var AuthorFound = items[i].product.author.name;
    if (author === AuthorFound) {
      itemArray.push(items[i]);

    } // end of checking
  } // end of for loop
  return itemArray;
} // end of function

console.log(nikonArray, 'ebay')

// []
// [ { googleId: '11180453840663864493',
//     author: { name: 'pictureline.com', accountId: '7774881' },
//     creationTime: '2013-03-08T13:00:00.000Z',
//     modificationTime: '2013-06-19T12:00:00.000Z',
//     country: 'US',
//     language: 'en',
//     title: 'Nikon D800 SLR Digital Camera Body',
//     description: 'The Nikon D800 Digital SLR body is built for today\'s multimedia photographer including a groundbreaking 36.3MP FX-format CMOS sensor, Full HD 1080p video at 30/25/24p with stereo sound, class leading ISO range of 100-6400, expandable to 25600, 4 fps burst rate and Advanced Scene Recognition System with 91000-pixel RGB sensor.',
//     link: 'http://www.pictureline.com/nikon-d800-digital-slr-body.html?utm_source=google&utm_medium=pla&utm_campaign=pla_feed',
//     brand: 'Nikon',
//     condition: 'new',
//     gtin: '00018208254804',
//     gtins: [ '00018208254804' ],
//     mpns: [ '25480' ],
//     inventories: [ [Object] ],
//     images: [ [Object], [Object], [Object], [Object], [Object], [Object] ] },
//   { googleId: '18400283058629038583',
//     author: { name: 'eBay - Bigvalueinc', accountId: '8026394' },
//     creationTime: '2013-05-28T16:27:33.000Z',
//     modificationTime: '2013-06-18T22:51:38.000Z',
//     country: 'US',
//     language: 'en',
//     title: 'Nikon 1 S1 10.1 Mp Digital Camera - Red (w/ 11-27.5mm And Vr 30-110mm Lenses)',
//     description: '27629 Browse Our Store Store home Point Shoot Cameras Pro. SLR Cameras Digital Camera Lenses Camcorders Projectors GPS Navigation Home audio Blu-ray / DVD Players Nikon 1 S1 10.1 MP Digital Camera - Red (w/ 11-27.5mm and VR 30-110mm Lenses) New, Never Opened 11-27.5mm and 30-110mm Zoom Lenses 10.1MP CX High-Speed AF CMOS Sensor 3.0 460k-Dot LCD Monitor EXPEED 3A Image Processor 15fps Continuous Shooting with Autofocus Full HD 1920 x 1080/60i Video Motion Snapshot and Live Image Control Simultan',
//     link: 'http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=360603997858&itemid=360603997858&icep_meta_categ_id=625&icep_etrs=Y&icep_epid=140321452&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n',
//     brand: 'Nikon',
//     condition: 'new',
//     inventories: [ [Object] ],
//     images: [ [Object], [Object], [Object] ] },
//   { googleId: '17912253870470323599',
//     author: { name: 'Overstockdigital', accountId: '9189052' },
//     creationTime: '2012-07-23T21:25:32.000Z',
//     modificationTime: '2013-05-31T19:06:14.000Z',
//     country: 'US',
//     language: 'en',
//     title: 'Nikon D3100 SLR Digital Camera with 18-55mm VR Lens',
//     description: 'Nikon D3100 SLR Digital Camera with 18-55mm VR Lens',
//     link: 'http://overstockdigital.com/ovcat/product_info.php?products_id=322615',
//     brand: 'Nikon',
//     condition: 'new',
//     mpns: [ '25472' ],
//     inventories: [ [Object] ],
//     images: [ [Object] ] },
//   { googleId: '17254992744481035890',
//     author: { name: 'Medical Arts Press', accountId: '10009508' },
//     creationTime: '2013-04-06T14:11:20.000Z',
//     modificationTime: '2013-06-18T20:55:36.000Z',
//     country: 'US',
//     language: 'en',
//     title: 'Nikon Digital Cameras; 1 S1, With 11-27.5mm NIKKOR Lens, Black',
//     description: 'Digital camera with support for interchangeable 1 NIKKOR lenses; Nikon 1 mount. NIKKOR 11-27.5mm f/3.5-5.6 retractable lens lets you shoot in wide or telephoto modes for crisp, sharp images',
//     link: 'http://www.medicalartspress.com/mcode/mcode.aspx?u=http:%2F%2Fwww.medicalartspress.com%2Fnikon-digital-cameras%2Fcbs%2F317932.html&cm_mmc%3DSEM_PLA_317932&ci_src=14110944&ci_sku=317932',
//     brand: 'Nikon',
//     condition: 'new',
//     gtin: '00018208276172',
//     gtins: [ '00018208276172' ],
//     mpns: [ 'NIKON 1 S1' ],
//     inventories: [ [Object] ],
//     images: [ [Object] ] },
//   { googleId: '17225849483606303723',
//     author: { name: 'eBay - onecall', accountId: '6347724' },
//     creationTime: '2013-05-13T00:21:17.000Z',
//     modificationTime: '2013-06-12T02:23:55.000Z',
//     country: 'US',
//     language: 'en',
//     title: 'Nikon  D7100 Body 24.1-megapixel Digital Camera',
//     description: 'brand nikon color black mpn 1513 megapixels 24 1 mp model d7100 digital cameras sensor resolution display 24.1 mp mpn single 1513 reserved product title nikon d series d 7100 24.1 mp black body only cnet jd ext general enclosure color black cnet jd search header manufacturer nikon cnet jd search header model d 7100 cnet jd search lens system lens for sd body only',
//     link: 'http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=171022734900&itemid=171022734900&icep_meta_categ_id=625&icep_etrs=Y&icep_epid=144193756&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n',
//     brand: 'Nikon',
//     condition: 'new',
//     gtin: '00018208015139',
//     gtins: [ '00018208015139' ],
//     mpns: [ '1513' ],
//     inventories: [ [Object] ],
//     images: [ [Object], [Object], [Object] ] } ] 'ebay'
