const newProducts = require( "../products.json" );

let getItems = function() {
    console.log( "Get items" )
    return newProducts[ "items" ];
}

let getItemsByBrand = function( items, brand ) {
    console.log( "Get items by Brand: " + brand )
    let newArr = [];
    for ( let i = 0; i < items.length; i++ ) {
        if ( items[ i ][ 'product' ][ 'brand' ] === brand ) {
            newArr.push( items[ i ] );
        }
    }
    return newArr;
}

let getItemsByCountry = function( items, country ) {
    console.log( "Get items by Country: " + country )
    let newArr = [];
    for ( let i = 0; i < items.length; i++ ) {
        if ( items[ i ][ 'product' ][ 'country' ] === country ) {
            newArr.push( items[ i ] );
        }
    }
    return newArr;
}

let getItemsByAuthor = function( items, author ) {
    console.log( "Get items by Author: " + author )
    let newArr = [];
    for ( let i = 0; i < items.length; i++ ) {
        if ( items[ i ][ 'product' ][ 'author' ][ 'name' ] === author ) {
            newArr.push( items[ i ] );
        }
    }
    return newArr;
}

let getAvailableProducts = function( items ) {
    console.log( "Get items by Availability" )
    let newArr = [];
    for ( let i = 0; i < items.length; i++ ) {
        if ( items[ i ][ 'product' ][ 'inventories' ][ 0 ][ 'availability' ] === "inStock" ) {
            newArr.push( items[ i ] );
        }
    }
    return newArr;
}

let getProductsByMaxPrice = function( items, price ) {
    console.log( "Get items by Maximum Price" )
    let newArr = [];
    for ( let i = 0; i < items.length; i++ ) {
        if ( items[i]['product']['inventories'][0]['price'] <= price ) {
            newArr.push( items[ i ] );
        }
    }
    return newArr;
}

let getProductsByMinPrice = function( items, price ) {
    console.log( "Get items by Minimum Price" )
    let newArr = [];
    for ( let i = 0; i < items.length; i++ ) {
        if ( items[i]['product']['inventories'][0]['price'] >= price ) {
            newArr.push( items[ i ] );
        }
    }
    return newArr;
}

let checkEmptyArr = function( arr ) {
    if ( arr.length === 0 ) {
        return "Empty!"
    } else {
        return arr;
    }
}

let items = getItems();

// // All items made by Sony
// console.log( getItemsByBrand( items, "Sony" ) );
//
// // All items made by Sony that are available
// console.log( getAvailableProducts( getItemsByBrand( items, "Sony" ) ) );
//
// // All available items by the author "Adorama Camera"
// console.log( getAvailableProducts( getItemsByAuthor( items, "Adorama Camera" ) ) );
//
// // All items made by Nikon with the author eBay.
// getItemsByBrand( items, "Nikon" );
// console.log( getAvailableProducts( getItemsByAuthor( items, "eBay" ) ) );


// Further
const [ , , ...args ] = process.argv;
console.log( `Argument(s):  ${args}` );
// if ( args[ 0 ] ) {
//     console.log( `Argument(s):  ${args}` );
//     console.log( checkEmptyArr( getItemsByBrand( items, args[ 0 ] ) ) );
// }

if ( args[ 0 ] === "getItemsByBrand"  ) {
    console.log( args[0]( items, args[1] ) );
} else if  ( args[ 0 ] === "getItemsByCountry"  ) {
    console.log( getItemsByCountry( items, args[1] ) );
} else if (args[0] === "checkInventoryTotalPrice" ) {
    let sum = 0;
    let newArr = getAvailableProducts( items );
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
        sum+= newArr[i]['product']['inventories'][0]['price'];
    }
    console.log("Total price of available inventories : $" + Math.round(sum));
} else if (args[0] === "getProductsByMaxPrice" ) {
    console.log( getProductsByMaxPrice( items, args[1] ));
} else if (args[0] === "getProductsByMinPrice" ) {
    console.log( getProductsByMinPrice( items, args[1] ));
}
