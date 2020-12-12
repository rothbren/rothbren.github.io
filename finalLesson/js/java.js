/************RENTALS***********/
const rentalURL = "https://rothbren.github.io/finalLesson/data/rental.json";

fetch(rentalURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        //console.log(jsonObject); 
        
        const r = jsonObject["rentals"];
        

        for(let i = 0; i <r.length; i++){
            let rental_div = document.createElement('div');
            let name = document.createElement('h3');
            let maxpersons= document.createElement('p');
            let halfP= document.createElement('p');
            let fullP= document.createElement('p');
            let whalfP= document.createElement('p');
            let wfullP= document.createElement('p');
            let other= document.createElement('p');

            name.textContent = r[i].name;
            maxpersons.textContent = "Max Number of People: " + r[i].maxPersons;
            halfP.textContent = "Half Day Price: "+ r[i].reservationprice.halfP;
            fullP.textContent = "Full Day Price: "+ r[i].reservationprice.fullP;
            whalfP.textContent = "Price without Reservation- Half Day: "+ r[i].walkinprice.whalfP;
            wfullP.textContent = "Price without Reservation- Full Day: "+ r[i].walkinprice.wfullP;
            other.textContent = "Other Information: " + r[i].other;

            rental_div.appendChild(name);
            rental_div.appendChild(maxpersons);
            rental_div.appendChild(halfP);
            rental_div.appendChild(fullP);
            rental_div.appendChild(whalfP);
            rental_div.appendChild(wfullP);
            rental_div.appendChild(other);

            document.querySelector('div.rental_div').appendChild(rental_div);

        }
    })

var params = new URLSearchParams(location.search);
var data = '<br/><strong>Your Reservation: </strong><br/>';
data = data + 'Your Name: ' + params.get('fname') + '<br/>';
data = data + 'Email: ' + params.get('email') + '<br/>';
data = data + 'Phone: ' + params.get('phone') + '<br/>';
data = data + 'Zipcode: ' + params.get('zipcode') + '<br/>';
data = data + 'Home State: ' + params.get('cname') + '<br/>';
data = data + 'Cruise Line: ' + params.get('cruise') + '<br/>';
data = data + 'Date of Adventure: ' + params.get('date') + '<br/>';
data = data + 'Number in Party: ' + params.get('number') + '<br/>';
data = data + 'Rental Type: ' + params.get('rentalType') + '<br/>';
data = data + 'Special Instructions: ' + params.get('comments_box') + '<br/><br/>';
data = data + 'Drop Off Instructions: ' + params.get('comments_box') + '<br/><br/>';
data = data + 'Additional Information and Comments: ' + params.get('comments_box') + '<br/><br/>';
document.querySelector(".reservationInfo").innerHTML = data;

