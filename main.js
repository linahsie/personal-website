/*jslint browser: true*/
/*global $, jQuery, alert*/

//FOR NAV BAR SCROLLING
$(document).ready(function () {
    "use strict";
    var n, ns, hdr;
    n = $("#nav-bar");
    ns = "nav-bar-scrolled";
    hdr = $('header').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= hdr) {
            n.addClass(ns);
        } else {
            n.removeClass(ns);
        }
    });
});
/*
//FOR MODAL
$(function () {
    "use strict";
    
    var modal, btn, span, body;
    
    // Get the modal
    modal = document.getElementById('modal-button');
    
    // Get the button that opens the modal
    btn = document.getElementById("my-button");
    
    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];

    body = document.getElementsByTagName("body")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
        $("body").addClass("modal-open");
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        $("body").removeClass("modal-open");
    };
    
    body.onclick = function () {
        $("body").removeClass("modal-open");
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});*/

//This JavaScript snippet will look for anchor tags <a> with a class of "scroll-link" and
//bind to their click event an animation that imitates smooth scrolling
$(document).ready(function () {
    "use strict";
    
    $("a.scroll-link").bind("click", function (event) {
        event.stopPropagation();
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    });
});

$(document).ready(function () {
    var today = new Date();
    var thisyear = today.getFullYear();
    document.getElementById("age").innerHTML = thisyear - 1998;
});