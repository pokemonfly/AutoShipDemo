$(init);

var map = [],
    dragType = null;

function init() {
    $(document).on('click', '.create-grid', function() {
        var w = +$('#width').val(),
            h = +$('#height').val();
        createMap(w, h);
    }).on('dragstart', '.drag-item', function(e) {
        dragType = $(this).attr('data-type');
        console.log(dragType)
    }).on('dragover', '.ceil', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }).on('drop', '.ceil', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $t = $(this),
            row = $t.attr('data-row'),
            col = $t.attr('data-col');
        $(this).addClass('ceil-ship ceil-type' + dragType)
    })
    .on('click', '.create-grid-load', load)
    .on('click', '.update', update)
    .on('click', '.calc', calc)
    .on('click', '.move', move)
}

function createMap(w, h) {
    map = Array(h + 1).fill(Array(w + 1).fill(0))
    var html = map.map(function(row, rowIndex) {
        var rowHtml = row.map(function(col, colIndex) {
            if (!rowIndex) {
                var str = colIndex > 0 ? String.fromCharCode(64 + colIndex) : ''
                return '<div class="ceil label">' + str + '</div>'
            }
            if (!colIndex) {
                return '<div class="ceil label">' + rowIndex + '</div>'
            }
            return `<div id="${ rowIndex}-${ colIndex}" data-row="${ rowIndex}" data-col="${ colIndex }"  class="ceil"></div>`
        }).join('')
        return `<div class="row">${ rowHtml }</div>`
    }).join('')
    $('.grid').html(html)
}

function addTarget(pos, type) {}

function aStar(start, end) {
    return [];
    return null
}

function load() {}

function update() {}

function calc() {}

function move() {}