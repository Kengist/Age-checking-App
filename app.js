

    const btn = document.getElementById('ageBtn');
const calculateAge =(e)=>{

const dayIn = document.getElementById('date').value;
const monthIn = document.getElementById('month').value;
const yearIn = document.getElementById('year').value;

const date = new Date();

let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
const monthNum = [31, 28, 31, 30,31,30,31,31,30,31, 30,31];

if(dayIn > day){
    day = day + monthNum[month - 1];
    month = month - 1;
}

if(monthIn > month){
    month = month + 12;
    year = year - 1;
}

const d = day - dayIn;
const m = parseFloat(month - monthIn);
const y = year - yearIn;

const age = document.getElementById('age');
age.innerHTML =`Your Age is ${y}Years ${m}Months ${d}Days`;

e.preventDefault();
}
btn.addEventListener('click', calculateAge);