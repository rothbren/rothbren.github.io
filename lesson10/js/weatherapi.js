const weatherURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=f9208b18eeb79b0482b30e396e20dd9e";

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        document.getElementById('currently').textContent = jsObject.weather[0].main;
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind_speed').textContent = jsObject.wind.speed;
        document.getElementById('wind_chill').textContent = jsObject.weather.main;
       
    });


const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=f9208b18eeb79b0482b30e396e20dd9e";

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
        }
    });
    /*    let day = 0;
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        forecast.forEach(x => {
            const d = new Date(x.dt_txt);
            document.getElementById("dayofweek${day+1}").textContent = weekdays[d.getDay()];
            document.getElementById("forecast${day+1}").textContent = x.main.temp;
            day++;
        })
    });   
    */ 