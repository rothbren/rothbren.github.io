function getWindChill(t, s) {
  return  Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));  
}

let temp = 40;
let wind = 5;
document.querySelector(".wind_speed").innerHTML = wind;
document.querySelector(".temp").innerHTML = temp;

if (temp < 50 && wind > 3)  {
  document.querySelector(".wind_chill").innerHTML = getWindChill(temp, wind);
} else {
  document.querySelector(".wind_chill").innerHTML = 'N/A';
}

