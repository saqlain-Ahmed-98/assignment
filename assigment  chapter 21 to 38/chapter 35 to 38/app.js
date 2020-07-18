var now = new Date();
document.write(now);


function greet(fn,ln)
{
    alert("Welcome "+fn+" "+ln);
}

greet("Saqlain","Ahmed");


function add(a,b)
{
    alert("Sum "+(a+b));
}

add(+prompt("Enter 1st no : "),+prompt("Enter 2nd no : "));


function adad(a,b,c)
{
    if (b == "+") {
        document.write("<br>Sum : "+(a+c));
    }
    else if (b == "-") {
        document.write("<br>Subtract : "+(a-c));
    }
    else if (b == "*") {
        document.write("<br>Multiply : "+(a*c));
    }
    else if (b == "/") {
        document.write("<br>Divide : "+(a/c));
    }
    else {
        document.write("<br>Invalid Operator!!");
    }
}

adad(+prompt("Enter 1st no : "),prompt("Enter operator : "),+prompt("Enter 2nd no : "));


function squ(a)
{
    document.write("<br>Square "+(a*a));
}

squ(4);


fac(10);

var fact;
var num;
function fac(num)
{

fact=10;

    for(var i=num; i>=1; i--)
    {
        fact=fact*i;
        
    }
}  



document.write("<br>Factorial : "+fact);

prntn(5,15);

var strt;
var end;

function prntn(strt,end)
{
    for(var i=strt; i<=end; i++)
    {
        document.write("<br>"+i);
    }

}

hyp(3,4);

var h;

function hyp(b,p)
{
        h=Math.sqrt(((b*b)+(p*p)));
          
}

document.write("<br>Hypotneous : "+h);

area(3);

function area(a,c=5)
{
    document.write("<br> Area : "+a*c);
}


function palindrome(str) {
    
    str = str.toLowerCase();
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return "Not Palindrome";
      }
    }
    return "Palindrome";
   }
 document.write("<br>"+palindrome("maddam"));



 function titc(sttr)
{
     
     var arr=sttr.toLowerCase().split(" ");
     var rs=arr.map(
         function(val)
         {
             return val.replace(val.charAt(0),val.charAt(0).toUpperCase());
         }
     );
    return rs.join(" ");
    
}   

document.write(titc("the quick brown fox"));

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("<br>"+find_longest_word('Web Development Tutorial'));


function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write("<br>"+char_count('JSResourceS.com', 'o'));


function calcCircumference(r){
    document.write("<br> Circumference : "+(2*3.142*r));
}

calcCircumference(4);

function calcArea(r){
    document.write("<br> area : "+(3.142*r*r));
}

calcArea(4);