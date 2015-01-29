$(document).ready(function() {
    
    var opened = false;
    
    function openAll() {
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
        if(opened) {
            opened = false;
            closeAll();
        }
        else {
            opened = true;
            openAll();
        }
    });
    
});
