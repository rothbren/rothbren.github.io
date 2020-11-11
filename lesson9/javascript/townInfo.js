const townURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jasonObject){
        console.table(jasonObject); //checking the table, delete for final results

        const towns = jasonObject["towns"];

        for (let i = 0; i < towns.length; i++ ){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let motto = document.createElement('motto');
            let yearFounded = document.createElement('p');
            let currentPop = document.createElement('p');
            let averageRain = document.createElement('p');
            let events = document.createElement('img');

            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            currentPop.textContent = 'Current Population: ' + towns[i].currentPop;
            averageRain.textContent = 'Average Rainfall: ' + towns[i].averageRain;
            events.textContent = 'Events: ' + towns[i].events;
            image.setAttribute("src", towns[i].imageurl);
            image.setAttribute("alt", h2.textContent + "-" + towns[i].order);
            image.setAttribute("height", "205");

            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.appendChild(currentPop);
            card.appendChild(averageRain);
            card.appendChild(events);
            card.appendChild(image);

            document.querySelector('div.town_info').appendChild(card);

        }
    })

    

    