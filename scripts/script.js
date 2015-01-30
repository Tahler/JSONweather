////////////////////// "Mr. Beatty's" code ////////////////////////

var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Salt+Lake+City&units=imperial&cnt=7');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    document.getElementById('location').innerHTML = 'Forecast for ' + weatherData.city.name;
//    
    
    fillAccordions(weatherData);
}

////////////////////// Our code ////////////////////////

$('.accordion').css('width', document.getElementById('section').offsetWidth / 7 - 13); // hardcoded hard

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDate(rawDate) {
    return months[rawDate.getMonth()] + ' ' + rawDate.getDate() + ', ' + rawDate.getFullYear(); // reads as January 28, 2015
}

//cool to warm: blue     greenish    yellow  yellow-orange  orange   orange-red  bloodred   burgandy
var colors = ['#00aeff', '#88c578', '#e1d51f', '#ffa604', '#ff8905', '#ff4c02', '#fe0a00', '#900000'];
$('#colorkey').append('<p>Colors become warmer as the temperature increases.</p>');
for(var i = 0; i < colors.length; i++) {
    $('#colorkey').append('<div class="colorbox" id="color' + i + '"></div>');
    $('#color' + i).css('background', colors[i]);
}

//todo add css for .colorbox

function temperatureColor(temperature) {
    // as temperature increases, color return goes from white to sky blue to orange to red
    // maybe a huge switch could implement this
    
    switch(true) {
        case temperature < 20 :
            return colors[0];
        case temperature < 30 : 
            return colors[1];
        case temperature < 45 :
            return colors[2];
        case temperature < 60 :
            return colors[3];
        case temperature < 75 : 
            return colors[4];
        case temperature < 90 :
            return colors[5];
        case temperature < 100 :
            return colors[6];
        default :
            return colors[7];
    }
    
    
    return "ffffff";
}

function fillAccordions(weatherData) {
    for(var i = 0; i < 7; i++) {
        // Headers
        var dayNumber = date.getDay();
        if(dayNumber >= 7) dayNumber -= 7;
        date.setDate(date.getDate() + 1); // Don't add i! add 1 since it is being set everytime.
        document.getElementById('day' + i + 'header').innerHTML = '<h4>' + days[dayNumber] + '</h4>' + '<h5>' + formatDate(date) + '</h5>';
        
        // Contents
        document.getElementById('day' + i + 'highLowTemp').innerHTML = Math.round(weatherData.list[i].temp.max) + '/' + Math.round(weatherData.list[i].temp.min);
        document.getElementById('day' + i + 'conditions').innerHTML = weatherData.list[i].weather[0].main;
        document.getElementById('day' + i + 'icon').src = 'http://openweathermap.org/img/w/' + weatherData.list[i].weather[0].icon + '.png';
        
        var currentTemp = Math.round(weatherData.list[i].temp.day);
        document.getElementById('day' + i + 'currentTemp').innerHTML = currentTemp;
        
        $('#day' + i + 'accordion .ui-accordion-content').css('background', temperatureColor(currentTemp)); // Change color of the content backgrounds to match the temperature...
        
//        console.log('http://openweathermap.org/img/w/' + weatherData.list[i].weather[0].icon + '.png');
//        console.log(weatherData);
    }
}
