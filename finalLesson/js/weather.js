const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&units=imperial&appid=f9208b18eeb79b0482b30e396e20dd9e";
//20.5083, -86.9458]

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('currently').innerHTML = jsObject.current.feels_like;
        document.getElementById('current-temp').textContent = jsObject.current.temp;
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('wind_speed').textContent = jsObject.current.wind_speed;
        document.getElementById('description').textContent = jsObject.current.weather.description;



        document.getElementById('dayofweek').textContent = jsObject.daily.temp;

        document.getElementById('closebtn').textContent = jsObject.alerts;
        // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

        // for (let day = 0; day < forecast.length; day++) {
        //     document.getElementById('dayofweek').innerHTML = jsObject.daily.temp.day;

        //     const d = new Date(forecast[day].dt_txt);
        //     document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
        //     document.getElementById(`forecast${day+1}`).textContent = forecast[day].main.temp;
        //     //console.log(forecast);
        //     const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
        //     const desc = forecast[day].weather[0].description;
        //     document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
        //     document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
        //     document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        //     document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
        // }
    
    });

 

