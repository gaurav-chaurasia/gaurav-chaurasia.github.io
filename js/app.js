/* all consts will go here at the top */ 
const cursor = $('.cursor');
const full_slider = $('.full-slider');
const slider = $('.slider');
const span0 = $('.span').eq(0);
const span1 = $('.span').eq(1);
const span2 = $('.span').eq(2);
const hamburger = $('.hamburger');

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
hamburger.on({
    mouseenter: function () {
        cursor.toggleClass('on-cross');
        // cursor.toggleClass('cursor-invert');
    },
    mouseleave: function () {
        cursor.toggleClass('on-cross');
        // cursor.toggleClass('cursor-invert');
    }
});
hamburger.click(function () {
    // document.querySelector('.nav').classList.toggle('nav-toggle');
    span1.toggleClass('slide');
    span0.toggleClass('cross-down');
    span2.toggleClass('cross-up');
    // console.log($('.span')[1]);
});

hamburger.click(function () {
    slider.toggleClass('show-slider');
    full_slider.toggleClass('show-full-slider');
    $('.project-link').toggleClass('hide');
    $('.manu-link').toggleClass('hide');
});

$(document).mousemove(function () {
    if ($(".slider:hover").length == 0) {
        full_slider.click(function () {
            slider.toggleClass('show-slider');
            full_slider.toggleClass('show-full-slider');
            span1.toggleClass('slide');
            span0.toggleClass('cross-down');
            span2.toggleClass('cross-up');
        });
    }
});
// document.onreadystatechange = function () {
//     if (document.readyState === "loading") {
//         document.querySelector("body").style.visibility = "hidden";
//         document.querySelector(".loder").style.visibility = "visible";
//     } else {
//         document.querySelector("body").style.visibility = "visible";
//     }
// }; 