function akanMaleNaming(year,month,day,male) {
    var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var gender = document.getElementById("gender").value;

    var century = Math.trunc(Math.round(year*0.01));
    alert(century);
    var dayOfTheWeek = Math.round((((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7);
    alert(dayOfTheWeek);


    if(gender === "male") {

        if(dayOfTheWeek === 0) {
            alert("Hey " + akanMaleNames[0]);
        }
        else if(dayOfTheWeek === 1) {
            alert("Hey " + akanMaleNames[1]);
        }
        else if(dayOfTheWeek === 2) {
            alert("Hey " + akanMaleNames[2]);
        }
        else if(dayOfTheWeek === 3) {
            alert("Hey " + akanMaleNames[3]);
        }
        else if(dayOfTheWeek === 4) {
            alert("Hey " + akanMaleNames[4]);
        }
        else if(dayOfTheWeek === 5) {
            alert("Hey " + akanMaleNames[5])
        }
        else {
            alert("Hey " + akanMaleNames[6]);
        }
    }
    
    else {
        if(dayOfTheWeek === 0) {
            alert("Hey " + akanFemaleNames[0]);
        }
        else if(dayOfTheWeek === 1) {
            alert("Hey " + akanFemaleNames[1]);
        }
        else if(dayOfTheWeek === 2) {
            alert("Hey " + akanFemaleNames[2]);
        }
        else if(dayOfTheWeek === 3) {
            alert("Hey " + akanFemaleNames[3]);
        }
        else if(dayOfTheWeek === 4) {
            alert("Hey " + akanFemaleNames[4]);
        }
        else if(dayOfTheWeek === 5){
            alert("Hey " + akanFemaleNames[5]);
        }
        else {
            alert("Hey " + akanFemaleNames[6]);
        }
    }
}