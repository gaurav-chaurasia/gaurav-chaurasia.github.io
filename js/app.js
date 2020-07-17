/* all consts will go here at the top */ 
const cursor = $('.cursor');


/* cursor animation code starts below*/ 
$(document).mousemove(function(e) {
    cursor.css('left', e.pageX + "px");
    cursor.css('top', e.pageY + "px");
});

$('html').on({ // making cursor disappera on leaving screen
    mouseenter: function () {
        cursor.toggleClass('cursor-move');
    },
    mouseleave: function () {
        cursor.toggleClass('cursor-move');
    }
});

$('li a').on({ // making cursor enlarge on hovering links
    mouseenter: function() {
        cursor.addClass('animate-cursor');
        cursor.addClass('cursor-invert');
    },
    mouseleave: function () {
        cursor.removeClass('animate-cursor');
        cursor.removeClass('cursor-invert');
    }
});
$('a').on({ // making cursor enlarge on hovering links
    mouseenter: function () {
        cursor.addClass('animate-cursor');
    },
    mouseleave: function () {
        cursor.removeClass('animate-cursor');
    }
});
// console.log($("button"));
// console.log($(".cursor"));

$('.brand').on({ // showing owns img on hover over name
    mouseenter: function () {
        cursor.toggleClass('on-logo');
    },
    mouseleave: function () {
        cursor.toggleClass('on-logo');
    }
});

$('img').on({ 
    mouseenter: function () {
        cursor.toggleClass('on-img');
    },
    mouseleave: function () {
        cursor.toggleClass('on-img');
    }
});
$('.hamburger').on({
    mouseenter: function () {
        cursor.toggleClass('on-cross');
        // cursor.toggleClass('cursor-invert');
    },
    mouseleave: function () {
        cursor.toggleClass('on-cross');
        // cursor.toggleClass('cursor-invert');
    }
});
$('.hamburger').click(function () {
    // document.querySelector('.nav').classList.toggle('nav-toggle');
    $('.span').eq(1).toggleClass('slide');
    $('.span').eq(0).toggleClass('cross-down');
    $('.span').eq(2).toggleClass('cross-up');
    console.log($('.span')[1]);
});
