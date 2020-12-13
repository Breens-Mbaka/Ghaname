var year = 1989;
var month = 7;
var day = 16;


var century = Math.round(year * 0.01);
alert(century);
var dayOfTheWeek = Math.trunc(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )) % 7
alert(dayOfTheWeek);