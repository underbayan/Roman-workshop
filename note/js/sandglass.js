#!/usr/bin/env node
'use strict'
console.log('============================================================')
console.log('=                         sandGlass                        =')
console.log('============================================================')
console.log("sandGlass Demo")
var Sandglass = require( 'sandglass' );
var sandglass = new Sandglass();
var sandStream = sandglass.absoluteSlice( 1000 );
setTimeout( function() { sandglass.emit( 1 ) }, 500 );
setTimeout( function() { sandglass.emit( 2 ) }, 800 );
setTimeout( function() { sandglass.emit( 3 ) }, 1700 );
setTimeout( function() { sandglass.emit( 4 ) }, 2100 );
setTimeout( function() { sandglass.emit( 5 ) }, 2300 );
setTimeout( function() { sandglass.emit( 6 ) }, 5000 );
sandStream.on( 'aggregate', function ( agg ) {
    console.log( '@agg:', agg );
} );