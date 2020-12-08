/* all consts will go here at the top */

const cursor = $('.cursor');
const full_slider = $('.full-slider');
const slider = $('.slider');
const span0 = $('.span').eq(0);
const span1 = $('.span').eq(1);
const span2 = $('.span').eq(2);
const hamburger = $('.hamburger');

/*
****************** 
// ?contact form functionality
   using google forms
******************
*/
let submitted = false;

$('#google-form').on('submit', function () {
    $('#google-form *').toggleClass('hide');
    $('#google-form *').css('display', 'none');
    // $('.submit-message').toggleClass('hide');
    $('.submit-message').css('transform', 'translateX(0%)');
    $('.submit-message').css('display', 'flex');
});

$('.close').click(function () {
    $('#google-form *').toggleClass('hide');
    $('#google-form *').css('display', 'flex');
    // $('.submit-message').toggleClass('hide');
    $('.submit-message').css('transform', 'translateX(-200%)');
    $('.submit-message').css('display', 'none');
    location.reload(true);
    // $('#google-form').reset();
    submitted = false;
});


/* cursor animation code starts below*/
$(document).mousemove(function (e) {
    cursor.css('left', e.pageX + 'px');
    cursor.css('top', e.pageY + 'px');
});

$('html').on({
    // making cursor disappera on leaving screen
    mouseenter: () => {
        cursor.addClass('cursor-move');
    },
    mouseleave: () => {
        cursor.removeClass('cursor-move');
    },
});

$('li a, .resume, .link-to-projects').on({
    // making cursor enlarge on hovering links
    mouseenter: () => {
        cursor.addClass('animate-cursor');
        cursor.addClass('cursor-invert');
    },
    mouseleave: () => {
        cursor.removeClass('animate-cursor');
        cursor.removeClass('cursor-invert');
    },
});

$('footer').on({
    // making cursor enlarge on hovering links
    mouseenter: () => {
        cursor.addClass('cursor-invert');
    },
    mouseleave: () => {
        cursor.removeClass('cursor-invert');
    },
});
$('.footer-links-link a, .footer-links-icon a').on({
    // making cursor enlarge on hovering links
    mouseenter: () => {
        cursor.addClass('animate-cursor');
    },
    mouseleave: () => {
        cursor.removeClass('animate-cursor');
    },
});

// $("").on({
//   // making cursor enlarge on hovering links
//   mouseenter: function () {
//     cursor.addClass("animate-cursor");
//     cursor.addClass("cursor-invert");
//   },
//   mouseleave: function () {
//     cursor.removeClass("animate-cursor");
//     cursor.removeClass("cursor-invert");
//   },
// });
// $('a').on({ // making cursor enlarge on hovering links
//     mouseenter: function () {
//         cursor.addClass('animate-cursor');
//     },
//     mouseleave: function () {
//         cursor.removeClass('animate-cursor');
//     }
// });
// console.log($("button"));
// console.log($(".cursor"));

$('.brand, .contact-me h3 span').on({
    // showing owns img on hover over name
    mouseenter: () => {
        cursor.addClass('on-logo');
    },
    mouseleave: () => {
        cursor.removeClass('on-logo');
    },
});

$('.my-name').on({
    // showing owns img on hover over name
    mouseenter: () => {
        cursor.addClass('on-name');
    },
    mouseleave: () => {
        cursor.removeClass('on-name');
    },
});

$('img').on({
    mouseenter: () => {
        cursor.addClass('on-img');
    },
    mouseleave: () => {
        cursor.removeClass('on-img');
    },
});
hamburger.on({
    mouseenter: () => {
        cursor.toggleClass('on-cross');
        // cursor.toggleClass('cursor-invert');
    },
    mouseleave: () => {
        cursor.toggleClass('on-cross');
        // cursor.toggleClass('cursor-invert');
    },
});

function showing_slider() {
    // document.querySelector('.nav').classList.toggle('nav-toggle');
    span1.toggleClass('slide');
    span0.toggleClass('cross-down');
    span2.toggleClass('cross-up');
    // console.log($('.span')[1]);
    slider.toggleClass('show-slider');
    full_slider.toggleClass('show-full-slider');
    $('.project-link').toggleClass('hide');
    $('.manu-link').toggleClass('hide');
}
hamburger.click(showing_slider);

$(document).mousemove(() => {
    if ($('.slider:hover').length == 0) {
        full_slider.click(() => {
            showing_slider();
        });
    }
});

$('.manu-link').click(showing_slider);
// document.onreadystatechange = function () {
//     if (document.readyState === "loading") {
//         document.querySelector("body").style.visibility = "hidden";
//         document.querySelector(".loder").style.visibility = "visible";
//     } else {
//         document.querySelector("body").style.visibility = "visible";
//     }
// };

// $('.img1').on({
//     mouseenter: function () {
//         $('.img1 .project-title').toggleClass('fade');
//     },
//     mouseleave: function () {
//         $('.img1 .project-title').toggleClass('fade');
//     },
// });
// $('.img2').on({
//     mouseenter: function () {
//         $('.img2 .project-title').toggleClass('fade');
//     },
//     mouseleave: function () {
//         $('.img2 .project-title').toggleClass('fade');
//     },
// });
// $('.img3').on({
//     mouseenter: function () {
//         $('.img3 .project-title').toggleClass('fade');
//     },
//     mouseleave: function () {
//         $('.img3 .project-title').toggleClass('fade');
//     },
// });
// $('.img4').on({
//     mouseenter: function () {
//         $('.img4 .project-title').toggleClass('fade');
//     },
//     mouseleave: function () {
//         $('.img4 .project-title').toggleClass('fade');
//     },
// });

// fading all images on hover
for (let i = 1; i <= 7; i++) {
    $(`.img${i}`).on({
        mouseenter: function () {
            $(`.img${i} .project-title`).toggleClass('fade');
        },
        mouseleave: function () {
            $(`.img${i} .project-title`).toggleClass('fade');
        },
    });
}

/**
 * @param {element} => target element
 * @returns true if target element is in viewPort
 **/
function isInViewport(element) {
    let elementTop = $(element).offset().top;
    let elementBottom = elementTop + $(element).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
}

$(window).on({
    scroll: function () {
        if (isInViewport('.b')) {
            $('footer').css('opacity', '0');
            $('footer').css('pointer-events', 'none');
            $('header').css('box-shadow', '0 0 0px 0px rgba(0, 0, 0, 0.1)');
        } else {
            $('footer').css('opacity', '1');
            $('footer').css('pointer-events', 'all');
            $('header').css('box-shadow', '0 0 20px 20px rgba(150, 150, 150, 0.1)');
        }
    },
});

// $(window).on({
//   //Code here
//   scroll: function () {
//     if (isInViewport('#projects')) {
//       if (isInViewport('.img2')) {
//         $('.project-logo').addClass('project-logo1');
//       }
//       else {
//         $('.project-logo').removeClass('project-logo1');
//       }
//     }
//   }
// });

// $(window).scroll(function () {
//   if ($('.b').isInViewport()) {
//     //  Use .blogcard instead of this
//     // $('.blogcard').addClass('test');
//     console.log('success.')
//   } else {
//     //  Remove class
//     // $('.main-page').removeClass('test');
//     console.log('No success.')
//   }
// });

// hides social icon when footer is in viewPort
$(window).on({
    scroll: function () {
        if (isInViewport('.footer-cover')) {
            $('.side-social').addClass('side-social-hide');
        } else {
            $('.side-social').removeClass('side-social-hide');
        }
    },
});
