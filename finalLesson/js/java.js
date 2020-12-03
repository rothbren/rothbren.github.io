function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
console.log(toggleMenu());
}

const daynames = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.getElementById('currentdate').textContent = fulldate;

/***********FORM************/

var params = new URLSearchParams(location.search);
var data = '<br/><strong>Your Reservation: </strong><br/>';
data = data + 'Your Name: ' + params.get('fname') + '<br/>';
data = data + 'Email: ' + params.get('email') + '<br/>';
data = data + 'Phone: ' + params.get('phone') + '<br/>';
data = data + 'Zipcode: ' + params.get('zipcode') + '<br/>';
data = data + 'Home State: ' + params.get('state') + '<br/>';
data = data + 'Cruise Line: ' + params.get('cruise') + '<br/>';
data = data + 'Date of Adventure: ' + params.get('date') + '<br/>';
data = data + 'Number in Party: ' + params.get('number') + '<br/>';
data = data + 'Rental Type: ' + params.get('rentalType') + '<br/>';
data = data + 'Special Instructions: ' + params.get('comments_box') + '<br/><br/>';
data = data + 'Drop Off Instructions: ' + params.get('comments_box') + '<br/><br/>';
data = data + 'Additional Information and Comments: ' + params.get('comments_box') + '<br/><br/>';
document.querySelector(".reservationInfo").innerHTML = data;

/************RENTALS***********/
const rentalURL = "data/rental.json";

fetch(rentalURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jasonObject){
        console.log(rental);

        const rental = jasonObject["rentals"];

        for(let i = 0; i<rental.length; i++){
            let name = document.createElement('name');
            let maxpersons= document.createElement('maxPersons');
            let price= document.createElement('reservationprice');
            let halfP= document.createElement('halfP');
            let fullP= document.createElement('fullP');
            let walkinprice= document.createElement('walkinprice');
            let other= document.createElement('other');

            name.textContent = rental[i].name;
            maxpersons.textContent = "Max Number of People: " + rental[i].maxpersons;
            price.textContent = "Price: " + rental[i].price;
            halfP.textContent = "Half Day Price: "+ rental[i].halfP;
            fullP.textContent = "Full Day Price: "+ rental[i].fullP;
            walkinprice.textContent = "Price without Reservation: "+ rental[i].walkinprice;
            other.textContent = rental[i].other;

            rentalInfo.appendChild(name);
            rentalInfo.appendChild(maxpersons);
            rentalInfo.appendChild(price);
            rentalInfo.appendChild(halfP);
            rentalInfo.appendChild(fullP);
            rentalInfo.appendChild(walkinprice);
            rentalInfo.appendChild(other);

            document.querySelector('div.rentalInfo').appendChild(rentalInfo);

        }
    })