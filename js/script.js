//function for male naming
function maleNaming(century,year,month,day) {
    var names = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var dayOfTheWeek = Math.trunc(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )) % 7;
    if (dayOfTheWeek === 0) {
        alert("Hello " + names[0]);
    }
    else if(dayOfTheWeek === 1) {
        alert("Hello " + names[1]);
    }
    else if(dayOfTheWeek === 2) {
        alert("Hello " + names[2]);
    }
    else if(dayOfTheWeek === 3) {
        alert("Hello " + names[3]);
    }
    else if(dayOfTheWeek === 4) {
        alert("Hello " + names[4]);
    }
    else if(dayOfTheWeek === 5) {
        alert("Hello " + names[5]);
    }
    else {
        alert("Hello " + names[6]);
    }
}

var century = parseInt(prompt("Century"));
var year = parseInt(prompt("Year"));
var month = parseInt(prompt("Month"));
var day = parseInt(prompt("day"));

maleNaming(century,year,month,day);