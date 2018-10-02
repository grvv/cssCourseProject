$(document).ready(function () {

    // For Sticky navigation
    let navbar = $('nav');

    $('#section2').waypoint(function (direction) {
        if (direction === 'down') {
            navbar.addClass('sticky');
        } else {
            navbar.removeClass('sticky');
        }
    }, {
            offset: '60px'
        }
    )


    // https://css-tricks.com/snippets/jquery/smooth-scrolling/


    // $('#goToPricing').click(
    //     function () {
    //         $("html, body").animate({scrollTop: $('#seventhSection').offset().top}, 1500)
    //     }
    // )

    // $('#goTODetails').click(
    //     function () {
    //         $("html, body").animate({scrollTop: $('#section2').offset().top}, 1000)
    //     }
    // )

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 48)
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        // var $target = $(target);
                        // $target.focus();
                        // if ($target.is(":focus")) { // Checking if the target was focused
                        //     return false;
                        // } else {
                        //     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        //     $target.focus(); // Set focus again
                        // };
                    });
                }
            }
        }
        );

    // Adding Animation

    $('#section2').waypoint(function (direction) {
        $('#animateSectionTwo').addClass('animated fadeIn slow')
    }, {
            offset: '50%'
        })

    $('#fourthSection').waypoint(function (direction) {
        $('#phoneAnimation').addClass('animated fadeInUp slow')
    }, {
            offset: '50%'
        })

    $('#seventhSection').waypoint(function (direction) {
        $('#premiumPriceAnimation').addClass('animated pulse')
    }, {
            offset: '25%'
        })

    // Navbutton functionality
    let navButton = $('#navButton');
    let navButtonIcon = $('#navButtonIcon')

    navButton.click(
        function () {
            $('#navbarItems').toggleClass('displayNone');

            if (navButtonIcon.hasClass('ion-navicon-round')) {

                navButtonIcon.removeClass('ion-navicon-round');
                navButtonIcon.addClass('ion-close-round');

            } else {

                navButtonIcon.addClass('ion-navicon-round');
                navButtonIcon.removeClass('ion-close-round');

            }

        }
    )

    $('#navbarItems').click(
        function () {
            $('#navbarItems').addClass('displayNone');
            navButtonIcon.addClass('ion-navicon-round');
            navButtonIcon.removeClass('ion-close-round');
        }
    )

})