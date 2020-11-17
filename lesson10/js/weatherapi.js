const apiURL = "http://api.openweathermap.org/data/2.5/weather?id={5604473}&appid={f9208b18eeb79b0482b30e396e20dd9e}";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });