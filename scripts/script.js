////////////////////// Mr. Beatty's code ////////////////////////

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
    document.getElementById("location").innerHTML = "Weather forecast for: "+weatherData.city.name;
//    document.getElementById("day").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
//    document.getElementById("currentTemp").innerHTML = weatherData.list[0].temp.day;
//    document.getElementById("conditions").innerHTML = weatherData.list[0].weather[0].main;
//    document.getElementById("conditionsDesc").innerHTML = weatherData.list[0].weather[0].description;  
    
    fillAccordions(weatherData);
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

function fillAccordions(weatherData) {
    for(var i = 0; i < 7; i++) {
        // Headers
        var dayNumber = date.getDay() + i;
        if(dayNumber >= 7) dayNumber -= 7;
        date.setDate(date.getDate() + 1); // Don't add i! add 1 since it is being set everytime.
        document.getElementById('day' + i + 'header').innerHTML = days[dayNumber] +'<br/>'+ formatDate(date);
        
        // Contents
        document.getElementById('day' + i + 'highLowTemp').innerHTML = Math.round(weatherData.list[i].temp.max)+"/"+Math.round(weatherData.list[i].temp.min);
        document.getElementById("day"+i+"conditions").innerHTML = weatherData.list[i].weather[0].description;
        console.log(weatherData);
    }
}
