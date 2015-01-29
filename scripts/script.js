// Change color of the content backgrounds to match the temperature...

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

$('.accordion').css('width', document.getElementById('section').offsetWidth / 7 - 13); // hardcoded AF

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Sets the date to tomorrow. Does all month adjusting for you.
//        date.setDate(date.getDate() + 1);
//        formatDate(date);

function formatDate(rawDate) {
    return months[rawDate.getMonth()] + ' ' + rawDate.getDate() + ', ' + rawDate.getFullYear(); // reads as January 28, 2015
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
        document.getElementById('day' + i + 'currentTemp').innerHTML = Math.round(weatherData.list[i].temp.day); 
//        console.log('http://openweathermap.org/img/w/' + weatherData.list[i].weather[0].icon + '.png');
//        console.log(weatherData);
    }
}
