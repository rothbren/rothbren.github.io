const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20&lon=-86&units=imperial&appid=f9208b18eeb79b0482b30e396e20dd9e";
//20.5083, -86.9458]


fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current-temp').textContent = jsObject.current.temp;
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('wind_speed').textContent = jsObject.current.wind_speed;
        document.getElementById('description').textContent = jsObject.current.weather.description;

        const alert = ""
        if (jsObject.alerts) {
            alert = jsObject.alerts
            document.getElementById('closebtn').textContent = alert;
        }
        else {
            document.getElementById('alertbox').style.display = "none"
        }

        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const forecast = jsObject.daily;  

        console.log("forecast ", forecast)
        const today = new Date()

        for (let day_index = 0; day_index < 3; day_index++) {
            document.getElementById(`dayofweek${day_index}`).textContent = weekdays[today.getDay() + day_index];

            document.getElementById(`forecast${day_index}`).textContent = forecast[day_index].temp.day;
            
            const imagesrc = 'https://openweathermap.org/img/wn/' +  forecast[day_index].weather[0].icon + '.png';
            const desc = forecast[day_index].weather[0].description;
            document.getElementById(`icon${day_index}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day_index}`).setAttribute('alt', desc);
       }
    
   });

 

