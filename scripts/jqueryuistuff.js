$(document).ready(function() {
    var opened = false;

    function openAll() { // Do this on an interval so it opens sequentially has a shutter effect
        $('.accordion').accordion("option", "active", 0);
    }
    
    function closeAll() {
        $('.accordion').accordion("option", "active", 2);
    }
    
    $('.accordion').accordion({
        active: 2, // Makes it start collapsed
        collapsible: true,
        heightStyle: 'auto' // 'content'
    });
    
    $('#toggle').on('click', function() {
//        if(allOpen()) {
        if(opened) {
            $(this).html('Open All');
            opened = false;
            closeAll();
        }
        else {
            $(this).html('Close All');
            opened = true;
            openAll();
//            setInterval(open, 20);
        }
    });
});