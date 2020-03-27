
//make variables for the current date and time
var rn = new Date();
var currentHour = rn.getHours();    //16>militarytime
var realDate = rn.getDate();     //26>Day of the month,does not start at 0
var currentMonth = rn.getMonth();   //2>March
var realMonth = "";
switch (currentMonth) {
  case 0:
    realMonth = "January";
    break;
  case 1:
    realMonth = "February";
    break;
  case 2:
    realMonth = "March";
    break;
  case 3:
    realMonth = "April";
    break;
  case 4:
    realMonth = "May";
    break;
  case 5:
    realMonth = "June";
    break;
  case 6:
    realMonth = "July";
    break;
  case 7:
    realMonth = "Augest";
    break;
  case 8:
    realMonth = "September";
    break;
  case 9:
    realMonth = "October";
    break;
  case 10:
    realMonth = "November";
    break;
  case 11:
    realMonth = "December";
    break;
}
var realYear = rn.getFullYear(); //2020

//display the current date in jumbotron
var displayDate = document.getElementById("currentDay");
displayDate.textContent = realMonth+" "+realDate+", "+realYear;

//change the description box color based on time
for (var i=9;i<18;i++) {
    if (i < currentHour) {
        document.getElementById(i.toString()).classList.add('past');
    } else if (i === currentHour) {
        document.getElementById(i.toString()).classList.add('present');
    } else if (i > currentHour) {
       document.getElementById(i.toString()).classList.add('future');
    }
}

