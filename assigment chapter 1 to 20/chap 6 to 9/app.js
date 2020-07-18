

var a = 10;

document.write("Result:" + "<br>");
document.write("Value of a is : " + a + "<br>");
document.write("------------------------------" + "<br>" + "<br>");


document.write("Value of ++a is : " + ++a + "<br>");
document.write("Value of a is : " + a + "<br>" + "<br>");


document.write("Value of a++ is : " + a++ + "<br>");
document.write("Value of a is : " + a + "<br>" + "<br>");


document.write("Value of --a is : " + --a + "<br>");
document.write("Value of a is : " + a + "<br>" + "<br>");



document.write("Value of a-- is : " + a-- + "<br>");
document.write("Value of a is : " + a + "<br>" + "<br>");

document.write("------------------------------" + "<br>" + "<br>");


var b = 2, c = 1;



document.write("Value of b is : " + b + "<br>");
document.write("Value of c is : " + c + "<br>");

var res = --b - --c + ++c + c--;

document.write("Value of --b - --c + ++c + c-- is : " + res + "<br>");



var sub1 = prompt("Enter Subject1 Name : ");
var sub2 = prompt("Enter Subject2 Name : ");
var sub3 = prompt("Enter Subject3 Name : ");

var totl = 100;

var mrk1 = prompt(" Enter " + sub1 + " Marks : ");
var mrk2 = prompt(" Enter " + sub2 + " Marks : ");
var mrk3 = prompt(" Enter " + sub3 + " Marks : ");

document.write("<h3>"+" Subject "+" Total Marks "+" Obtained Marks "+" Percentage "+"</h3>");
document.write(sub1 + "  " + totl + "  " + mrk1 + "  " + (totl/100*mrk1)+"%" +"<br>");
document.write(sub2 + "  " + totl + "  " + mrk2 + "  " + (totl/100*mrk2)+ "%" +"<br>");
document.write(sub3 + "  " + totl + "  " + mrk3 + "  " + (totl/100*mrk3)+ "%" +"<br>");



