//function for giving Akan names according to which day of the week a user was born
function akanNaming() {
    var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    //access input data and assign them to a variable
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var month = document.getElementById("day").value;
    var month = document.getElementById("gender").value;

    //calculation to get the century which the user was born in
    var century = Math.trunc(Math.round(year * 0.01));
    //calculation to know which day of the week the user was born
    var dayOfTheWeek = Math.round((((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7);

    //this condition must be true so that the nested if/else if statements can be executed
    if(gender == "male") {
        if(dayOfTheWeek === 0) {
            alert("Hey your Akan name is: " + akanMaleNames[0]);
        }
        else if(dayOfTheWeek === 1) {
            alert("Hey your Akan name is: " + akanMaleNames[1]);
        }
        else if(dayOfTheWeek === 2) {
            alert("Hey your Akan name is: " + akanMaleNames[2]);
        }
        else if(dayOfTheWeek === 3) {
            alert("Hey your Akan name is: " + akanMaleNames[3]);
        }
        else if(dayOfTheWeek === 4) {
            alert("Hey your Akan name is: " + akanMaleNames[4]);
        }
        else if(dayOfTheWeek === 5) {
            alert("Hey your Akan name is: " + akanMaleNames[5]);
        }
        else {
            alert("Hey your Akan name is: " + akanMaleNames[6]);
        }
    }
}