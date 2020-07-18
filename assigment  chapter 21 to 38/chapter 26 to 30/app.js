

var a=3.45214;
document.write("<br> Number : "+a);
var b=Math.round(a);
document.write("<br>Round : "+b);
var b=Math.floor(a);
document.write("<br>floor : "+b);
var b=Math.ceil(a);
document.write("<br>ceil : "+b);


var a=-2.673;
document.write("<br> Number : "+a);
var b=Math.round(a);
document.write("<br>Round : "+b);
var b=Math.floor(a);
document.write("<br>floor : "+b);
var b=Math.ceil(a);
document.write("<br>ceil : "+b);


var a=-4;
document.write("<br> Number : "+a);
var b=Math.abs(a);
document.write("<br>absolute : "+b);

var a=5;
document.write("<br> Number : "+a);
var b=Math.abs(a);
document.write("<br>absolute : "+b);



var b=Math.random()*7;
document.write("<br>random dice : "+Math.floor(b));


var b=Math.random()*3;
if(Math.floor(b)==2)
{
    document.write("<br>"+Math.floor(b)+" Head");
}else if(Math.floor(b)==1)
{
    document.write("<br>"+Math.floor(b)+" Tail");

}


var b=Math.random()*101;
document.write("<br>random no 1 to 100 : "+Math.floor(b));



var cc=prompt("Enter Weight : ");

var bb=cc.replace("kgs","Kilograms")

document.write("<br> User weight : "+bb);

var b=Math.random()*11;

var cc=+prompt("Enter Number b/w 1 to 10 : ");

if(cc == Math.floor(b))
{
    alert("Congrachulation");
}
else
{
    alert("Try Again");

}
