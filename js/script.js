//function for giving Akan names according to which day of the week a user was born
function akanNaming() {
    var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    //access input data and assign them to a variable
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var month = document.getElementById("day").value;
    var month = document.getElementById("gender").value;

    //formula to get the century which someone was born in
    var century = Math.trunc(Math.round(year * 0.01));
}