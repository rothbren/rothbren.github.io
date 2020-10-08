function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}



const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
document.getElementById('currentdate').textContent=("The current month is " + monthNames[d.getMonth()]);
/*
document.getElementById('currentdate').textContent = (day + date + month + year); */