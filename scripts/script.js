////////////////////// Mr. Beatty's code ////////////////////////

var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Salt+Lake+City&units=imperial');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    document.getElementById("location").innerHTML = weatherData.city.name;
    document.getElementById("day").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp").innerHTML = weatherData.list[0].temp.day;
    document.getElementById("conditions").innerHTML = weatherData.list[0].weather[0].main;
    document.getElementById("conditionsDesc").innerHTML = weatherData.list[0].weather[0].description;  
}

////////////////////// Our code ////////////////////////

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Sets the date to tomorrow. Does all month adjusting for you.
//        date.setDate(date.getDate() + 1);
//        formatDate(date);

function formatDate(rawDate) {
    return months[rawDate.getMonth()] + ' ' + rawDate.getDate() + ', ' + rawDate.getFullYear(); // reads as January 28, 2015
}

function fillAccordionHeaders() {
    for(var i = 0; i < 7; i++) {
        // Headers
        var dayNumber = date.getDay() + i;
        if(dayNumber >= 7) dayNumber -= 7;
        document.getElementById('day' + i + 'header').innerHTML = days[dayNumber];
        
        // Contents
        document.getElementById('date').innerHTML = formatDate(date);
    }
}

function fillAccordionContent() {
    for(var i = 0; i < 7; i++) {
        
    }
}

fillAccordionHeaders();
fillAccordionContent();

