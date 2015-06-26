/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#importantdiv').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
        $('progress').each(function() {
            var max = $(this).val();
            $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
        });
    }
});

//var feed = new Instafeed({
//    clientId: '3fa3569e365745d3a72cdbff6ca12db7',
//    limit: 20,
//    sortBy: 'most-liked',
//    after: function () {
//        var images = $("#instafeed").find('a');
//        $.each(images, function(index, image) {
//            var delay = (index * 75) + 'ms';
//            $(image).css('-webkit-animation-delay', delay);
//            $(image).css('-moz-animation-delay', delay);
//            $(image).css('-ms-animation-delay', delay);
//            $(image).css('-o-animation-delay', delay);
//            $(image).css('animation-delay', delay);
//            $(image).addClass('animated flipInX');
//        });
//    },
//    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
//});
//feed.run();
var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);