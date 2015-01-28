$(document).ready(function() {
    // animate example
    $( "#content1" ).on( "click", function() {
        $(this).animate({
            backgroundColor: "#40A",
            width: 500,
            height: 100
        }, 1000);
    });
    
    // accordion example
    $( "#accordion" ).accordion({
        collapsible: true
    });
    
    $( "#content6" ).on( "click", function() {
        $(this).hide( "explode", {
            pieces: 128
        }, 2000);
    });
});
