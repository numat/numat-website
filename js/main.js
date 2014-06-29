/*global $, location, document, Headroom*/
"use strict";

// Show and hide the navbar on scroll
var headroom = new Headroom(document.querySelector('.navbar-fixed-top'));
headroom.init();

// Introduces easing for anchor (ie. same page) links.
// From http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function () {
    var target;
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});

// Subtle transparency change on arrow hover
$('.scroll-button').hover(function () {
    $(this).animate({opacity: 1}, {queue: false, duration: 250});
}, function () {
    $(this).animate({opacity: 0.9}, {queue: false, duration: 250});
});
