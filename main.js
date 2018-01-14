$( function ( ) {
    $( document ).on( 'click', '.create-grid', function ( ) {
        var w = +$( '#width' ).val( ),
            h = +$( '#height' ).val( );
        createMap( w, h );
    })
})
var map = [ ]

function createMap( w, h ) {
    map = Array( h ).fill(Array( w ).fill( 0 ))
    var html = map.map( function ( row, rowIndex ) {
        var rowHtml = row.map( function ( col, colIndex ) {
            return `<div id="${ row }-${ col }" class="ceil"></div>`
        }).join( '' )
        return `<div class="row">${ rowHtml }</div>`
    }).join( '' )
    $( '.grid' ).html( html )
}
