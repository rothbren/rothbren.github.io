const townURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jasonObject){
        //console.table(jasonObject); checking the table, delete for final results

        const towns = jasonObject["towns"];

        for (let i = 0; i < towns.length; i++ ){
            let town_info = document.createElement('info_blocks');
            let name = document.createElement('h2');
            let photo = document.createElement('img');
            let motto = document.createElement('motto');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            //let events = document.createElement('p');

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
            averageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            //events.textContent = 'Events: ' + towns[i].events;
            photo.setAttribute("src", towns[i].photo);
            photo.setAttribute("height", "205");

            town_info.appendChild(name);
            town_info.appendChild(motto);
            town_info.appendChild(yearFounded);
            town_info.appendChild(currentPopulation);
            town_info.appendChild(averageRainfall);
            //town_info.appendChild(events);
            town_info.appendChild(photo);

            document.querySelector('div.town_info').appendChild(town_info);

        }
    })

    

    