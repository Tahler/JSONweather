$(document).ready(function() {
    var opened = false;
//    var openCount = 0;
    
//    function allOpen() {
//        for(var i = 0; i < 7; i++) {
//            if ($('#day' + i + 'accordion').accordion("option", "active")) {
//                // Then this accordion is closed...
//                return false;
//            }
//        }
//        return true;
//    }
    
//    function open() {
//        if(openCount <= 6) {
//            $('#day' + openCount + 'accordion').accordion("option", "active", 0);
//            openCount++;
//        }
//        else {
//            openCount = 0;
//        }
//    }
    
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
    
//    setInterval(function() {console.log(allOpen())},10);
});

