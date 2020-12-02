var currentURL = window.location.href;
let currentId = "5604473";
if (currentURL.indexOf("preston.html") > 0) {
    currentId = "5604473";
} else if (currentId.indexOf("sodaSprings.html") > 0) {
    currentId = "5607916";
} else if (currentId.indexOf("fishHaven.html") > 0) {
    currentId = "lat=42.0380399&lon=-111.4048681";
}

/***LINKS TO THE WEATHER_TOWN INFORMATION JSON FILES***/
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=" + currentId + "&units=imperial&appid=f9208b18eeb79b0482b30e396e20dd9e";
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + currentId + "&units=imperial&appid=f9208b18eeb79b0482b30e396e20dd9e";
const townInfoURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('currently').innerHTML = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind_speed').textContent = jsObject.wind.speed;

        let t = parseFloat(jsObject.main.temp);
        let s = parseFloat(jsObject.wind.speed);
        let wind_chill = "N/A";
        if (t <= 50 && s >= 3) {
            let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
            wind_chill = Math.round(f);
        };
        document.getElementById("wind_chill").innerHTML = wind_chill;

    });

fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {

        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = forecast[day].main.temp;
            //console.log(forecast);
            const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
            const desc = forecast[day].weather[0].description;
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', desc);

        }
    });


/*****CURRENT EVENTS******/
fetch(townInfoURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);


        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            const eventInfo = document.createElement('div');

            if (towns[i].name == "Preston" && currentURL.indexOf("preston.html") > 0) {



                eventInfo.setAttribute('class', 'eventInfo');
                for (let x = 0; x <= towns[i].events.length; x++) {

                    let para = document.createElement('p');

                    para.textContent = towns[i].events[x];

                    eventInfo.appendChild(para);

                }

            } else if (towns[i].name == "Soda Springs" && currentURL.indexOf('sodaSprings.html') > 0) {

                eventInfo.setAttribute('class', 'eventInfo');
                for (let x = 0; x <= towns[i].events.length; x++) {

                    let para = document.createElement('p');

                    para.textContent = towns[i].events[x];

                    eventInfo.appendChild(para);
                }
            } else if (towns[i].name == "Fish Haven" && currentURL.indexOf('fishHaven.html') > 0) {

                eventInfo.setAttribute('class', 'eventInfo');
                for (let x = 0; x <= towns[i].events.length; x++) {

                    let para = document.createElement('p');

                    para.textContent = towns[i].events[x];

                    eventInfo.appendChild(para);
                }

            }

            document.getElementById('events').appendChild(eventInfo);
        }

    });