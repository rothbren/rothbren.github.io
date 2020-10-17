function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
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

const d = new Date();
let message = document.querySelector(".message");

if (d.getDay() == 6) {
    message.style.display = "block";
};
