$(document).ready(function() {
    // Perhaps we could toggle this to collapse and open up, similar to what weather.com had.
//    $( ".accordion" ).on( "click", function() {
//        $(this).animate({
//            backgroundColor: "#40A",
//            width: 500,
//            height: 100
//        }, 1000);
//    });
    
    $('.accordion').accordion({
        active: false, // Makes it start collapsed
        collapsible: true,
        heightStyle: 'auto' // 'content'
    });
});
