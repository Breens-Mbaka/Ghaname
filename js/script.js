function akanNaming() {
    var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    //access input data and assign them to a variable
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var gender = document.getElementById("gender").value.toLowerCase();


    //calculation to get century part "19"/"20"
    var centuryInput = year * 0.01 //convert to decimal to get year part
    var century = Math.trunc(centuryInput); //remove decimal to remain with century

    //calculation to get year part "-88"/"10"
    var yearInput = year * 0.01 //convert to decimal to get year part
    var yearPart = yearInput % 1; //get the remainder
    var year = yearPart * 100; // change it back to whole number to get year

    //check and alert user if they have entered wrong data
    if ((gender === "male" || gender === "female") && (month > 1 || month <= 12) && (day > 1 || day <= 31)){
        var dayOfTheWeek = Math.round((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
        console.log(dayOfTheWeek)
    }
    else {
        alert("INVALID INPUT");
        return;
    }
   
    


    //this condition must be true so that the nested if/else if statements can be executed
    if (gender === "male") {
        if (dayOfTheWeek === 0) {
            alert("Hey your Akan name is: " + akanMaleNames[0]);
        } else if (dayOfTheWeek === 1) {
            alert("Hey your Akan name is: " + akanMaleNames[1]);
        } else if (dayOfTheWeek === 2) {
            alert("Hey your Akan name is: " + akanMaleNames[2]);
        } else if (dayOfTheWeek === 3) {
            alert("Hey your Akan name is: " + akanMaleNames[3]);
        } else if (dayOfTheWeek === 4) {
            alert("Hey your Akan name is: " + akanMaleNames[4]);
        } else if (dayOfTheWeek === 5) {
            alert("Hey your Akan name is: " + akanMaleNames[5]);
        } else {
            alert("Hey your Akan name is: " + akanMaleNames[6]);
        }
    }

    //this else control flow is executed if the user is a female
    if(gender === "female") {
        if (dayOfTheWeek === 0) {
            alert("Hey your Akan name is: " + akanFemaleNames[0]);
        } else if (dayOfTheWeek === 1) {
            alert("Hey your Akan name is: " + akanFemaleNames[1]);
        } else if (dayOfTheWeek === 2) {
            alert("Hey your Akan name is: " + akanFemaleNames[2]);
        } else if (dayOfTheWeek === 3) {
            alert("Hey your Akan name is: " + akanFemaleNames[3]);
        } else if (dayOfTheWeek === 4) {
            alert("Hey your Akan name is: " + akanFemaleNames[4]);
        } else if (dayOfTheWeek === 5) {
            alert("Hey your Akan name is: " + akanFemaleNames[5]);
        } else {
            alert("Hey your Akan name is: " + akanFemaleNames[6]);
        }
    }
}