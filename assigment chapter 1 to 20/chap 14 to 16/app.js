

var emp = [];

var strng = ["saqlain", "ahmed", "ali"];
var nmbr = [123, 456, 789];
var boolean = [true, false];
var mix = ["saqlain", 123, true];

var edu = ["SSC", "HSC", "BCS", "BS", "B.Com", "M.S", "M.Phill", "PhD"];

document.write("<h3>" + "Qualifications :" + "</h3>");
document.write("<h3> 1) " + edu[0] + "</h3>");
document.write("<h3> 2) " + edu[1] + "</h3>");
document.write("<h3> 3) " + edu[2] + "</h3>");
document.write("<h3> 4) " + edu[3] + "</h3>");
document.write("<h3> 5) " + edu[4] + "</h3>");
document.write("<h3> 6) " + edu[5] + "</h3>");
document.write("<h3> 7) " + edu[6] + "</h3>");
document.write("<h3> 8) " + edu[7] + "</h3>");

var stu = ["saqlain", "ahmed", "ali"];

var stuMrk = [300, 400, 450];

var totl = 500

document.write("<h3> Score of " + stu[0] + " is " + stuMrk[0] + ". Percentage: " + stuMrk[0] / totl * 100 + " %</h3>");
document.write("<h3> Score of " + stu[1] + " is " + stuMrk[1] + ". Percentage: " + stuMrk[1] / totl * 100 + " %</h3>");
document.write("<h3> Score of " + stu[2] + " is " + stuMrk[2] + ". Percentage: " + stuMrk[2] / totl * 100 + " %</h3>");


var clr = ["Red", "Green", "Blue", "Black"];

document.write("<h3> " + clr + "</h3>");

clr.unshift("Orange");

document.write("<h3> " + clr + "</h3>");

clr.push("Sky");

document.write("<h3> " + clr + "</h3>");

clr.unshift("Brown", "Cyan");

document.write("<h3> " + clr + "</h3>");

clr.shift();

document.write("<h3> " + clr + "</h3>");

clr.pop();

document.write("<h3> " + clr + "</h3>");

clr.splice("3", "0", "Brown");

document.write("<h3> " + clr + "</h3>");

clr.splice("2", "2");

document.write("<h3> " + clr + "</h3>");

var stuScr = [320, 230, 480, 120];

document.write("<h3> " + stuScr + "</h3>");


stuScr.sort();

document.write("<h3> " + stuScr + "</h3>");

var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCity = [];

document.write("<h3> " + "City Name" + "</h3>");

document.write("<h3> " + cityName + "</h3>");



selectedCity = cityName.slice(2, 4);


document.write("<h3> " + "Selected City" + "</h3>");
document.write("<h3> " + selectedCity + "</h3>");



var arrStrng = [" This ", " is ", " my ", " cat "];


document.write("<h3> " + "Array:" + "</h3>");
document.write("<h3> " + arrStrng + "</h3>");


document.write("<h3> " + "String:" + "</h3>");
document.write("<h3> " + arrStrng[0] + arrStrng[1] + arrStrng[2] + arrStrng[3] +"</h3>");



var cmptrPrts = [];


cmptrPrts.push("Keyboard");
cmptrPrts.push("Mouse");
cmptrPrts.push("Printer");
cmptrPrts.push("Monitor");

document.write("<h3> " + "Computer Parts" + "</h3>");
document.write("<h3> " + cmptrPrts + "</h3>");


document.write("<h3> " + "Out:" + "</h3>");
document.write("<h3> " + cmptrPrts[0] + "</h3>");

cmptrPrts.shift();

document.write("<h3> " + cmptrPrts + "</h3>");


document.write("<h3> " + "Out:" + "</h3>");
document.write("<h3> " + cmptrPrts[0] + "</h3>");

cmptrPrts.shift();

document.write("<h3> " + cmptrPrts + "</h3>");

document.write("<h3> " + "Out:" + "</h3>");
document.write("<h3> " + cmptrPrts[0] + "</h3>");

cmptrPrts.shift();

document.write("<h3> " + cmptrPrts + "</h3>");

document.write("<h3> " + "Out:" + "</h3>");
document.write("<h3> " + cmptrPrts[0] + "</h3>");

cmptrPrts.shift();

document.write("<h3> " + cmptrPrts + "</h3>");


var cmptrPrts = [];


cmptrPrts.push("Keyboard");
cmptrPrts.push("Mouse");
cmptrPrts.push("Printer");
cmptrPrts.push("Monitor");

document.write("<h3> " + "Computer Parts" + "</h3>");
document.write("<h3> " + cmptrPrts + "</h3>");


document.write("<h3> " + "Out:" + "</h3>");
document.write("<h3> " + cmptrPrts[3] + "</h3>");

cmptrPrts.pop();

document.write("<h3> " + cmptrPrts + "</h3>");


document.write("<h3> " + "Out:" + "</h3>");
document.write("<h3> " + cmptrPrts[2] + "</h3>");

cmptrPrts.pop();

document.write("<h3> " + cmptrPrts + "</h3>");

document.write("<h3> " + "Out:" + "</h3>");
document.write("<h3> " + cmptrPrts[1] + "</h3>");

cmptrPrts.pop();

document.write("<h3> " + cmptrPrts + "</h3>");

document.write("<h3> " + "Out:" + "</h3>");
document.write("<h3> " + cmptrPrts[0] + "</h3>");

cmptrPrts.pop();

document.write("<h3> " + cmptrPrts + "</h3>");


var phnManu = ["Apple","Samsumg","Motorola","Nokia","Sony","Haier"];


