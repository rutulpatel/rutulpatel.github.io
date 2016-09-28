/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        //$(".home").removeClass("home-extra-margin");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        //$(".home").addClass("home-extra-margin");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);



// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('app-root').on('click', '.page-scroll', function(event) {
        var anchor = $(this);

        console.log($(anchor).offset());
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('app-root').on('click', '.navbar-collapse ul li a', function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});