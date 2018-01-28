$( init );

var map = [],
    dragType = null;

function init( ) {
    $( document ).on( 'click', '.create-grid', function ( ) {
        var w = +$( '#width' ).val( ),
            h = +$( '#height' ).val( );
        createMap( w, h );
    }).on( 'dragstart', '.drag-item', function ( e ) {
        dragType = $( this ).attr( 'data-type' );
        console.log( dragType )
    }).on( 'dragover', '.ceil', function ( e ) {
        e.preventDefault( );
        e.stopPropagation( );
    }).on( 'drop', '.ceil', function ( e ) {
        e.preventDefault( );
        e.stopPropagation( );
        var $t = $( this ),
            row = $t.attr( 'data-row' ),
            col = $t.attr( 'data-col' );
        $( this ).addClass( 'ceil-ship ceil-type' + dragType )
    }).on( 'click', '.create-grid-load', load ).on( 'click', '.update', update ).on( 'click', '.calc', calc ).on( 'click', '.move', move )
}

function createMap( w, h ) {
    map = Array( h + 1 ).fill(Array( w + 1 ).fill( 0 ))
    var html = map.map( function ( row, rowIndex ) {
        var rowHtml = row.map( function ( col, colIndex ) {
            if ( !rowIndex ) {
                var str = colIndex > 0 ? String.fromCharCode( 64 + colIndex ) : ''
                return '<div class="ceil label">' + str + '</div>'
            }
            if ( !colIndex ) {
                return '<div class="ceil label">' + rowIndex + '</div>'
            }
            return `<div id="${ rowIndex }-${ colIndex }" data-row="${ rowIndex }" data-col="${ colIndex }"  class="ceil"></div>`
        }).join( '' )
        return `<div class="row">${ rowHtml }</div>`
    }).join( '' )
    $( '.grid' ).html( html )
}

function addTarget( pos, type ) {}
var map = [
        [
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            -1,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            -1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            -1,
            0,
            0
        ]
    ],
    width = 5,
    height = 4;
function aStar( start, end, canPass ) {
    var open = [start],
        closed = [],
        checkPoint = function ( y, x ) {
            return map[y][x ] != -1 && canPass
        }
    while ( open.length > 1 )
        var cur = open.pop( ),
            scale = map[cur.y][cur.x ] || 1;

    if ( cur.x = end.x && cur.y == end.y ) {
        //找到当前的目标点
        break;
    } else {
        // 计算当前节点的cost
        cur.cost = Math.abs( cur.x - start.x ) + Math.abs( cur.y - start.y )
        // 估算的cost + Math.abs( cur.x - end.x ) + Math.abs( cur.y - end.y );
        closed.push( cur )
    }

    // 周围的几个节点
    if (cur.x > 1 && checkPoint( cur.y, cur.x - 1 )) {
        open.push({
            x: cur.x - 1,
            y: cur.y,
            _p: {
                x: cur.x,
                y: cur.y
            }
        })
    }
    if (cur.x < width && checkPoint( cur.y, cur.x + 1 )) {
        open.push({
            x: cur.x + 1,
            y: cur.y,
            _p: {
                x: cur.x,
                y: cur.y
            }
        })
    }
    if (cur.y > 1 && checkPoint( cur.y - 1, cur.x )) {
        open.push({
            x: cur.x,
            y: cur.y - 1,
            _p: {
                x: cur.x,
                y: cur.y
            }
        })
    }
    if (cur.y < height && checkPoint( cur.y + 1, cur.x )) {
        open.push({
            x: cur.x,
            y: cur.y + 1,
            _p: {
                x: cur.x,
                y: cur.y
            }
        })
    }
}
return null
}
console.log(aStar({
x: 4,
y: 1
}, {
x: 3,
y: 4
}))
function load( ) {}

function update( ) {}

function calc( ) {}

function move( ) {}
