var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

function getDayOfWeek(num) {
    switch(num) {
        case 0: 
            return 'Sunday';
        case 1: 
            return 'Monday';
        case 2: 
            return 'Tuesday';
        case 3: 
            return 'Wednesday';
        case 4: 
            return 'Thursday';
        case 5: 
            return 'Friday';
        case 6: 
            return 'Saturday';
    }
}

function fillAccordionHeaders() {    
    for(var i = 0; i < 7; i++) {
        var dayNumber = date.getDay() + i;
        if(dayNumber >= 7) dayNumber -= 7;
        document.getElementById('day' + i + 'header').innerHTML = getDayOfWeek(dayNumber);
    }
}

fillAccordionHeaders();

////////////////////// Mr. Beatty's code ////////////////////////

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