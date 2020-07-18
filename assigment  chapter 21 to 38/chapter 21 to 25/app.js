

var a=prompt("Enter First Name");
var b=prompt("Enter Last Name");
var c=a+" "+b;

alert("Welcome "+c);


var d="Nokia";

document.write("My Favorite Phone is : "+d);

var e=d.length;

document.write("<br>Lenght of String : "+e);

var f="Pakistan";

document.write("<br>String : "+f);

var g=f.indexOf('n');

document.write("<br>Index of 'n' : "+g);


var h="Hello World";

document.write("<br>String : "+h);

var i=h.lastIndexOf('l');

document.write("<br>Index of 'n' : "+i);


var j="Pakistani";

document.write("<br>String : "+j);

var k=j.slice(3,4);

document.write("<br>Character at Index 3 : "+k);


var sd=prompt("Enter First Name");
var ss=prompt("Enter Last Name");
var sc=sd.concat(ss);

alert("Welcome "+sc);


var js="Hyderabad";

document.write("<br>City : "+js);

var ks=js.replace("Hyder","Islam");

document.write("<br>After Replacement : "+ks);


var message = "Ali and Sami are best friends. They play cricket and football together.";

document.write("<br>Msg : "+message);

var kss=message.replace(/and/gi,"&");

document.write("<br>After Replacement : "+kss);


var st="475";

document.write("<br>Value : "+st);
document.write("<br>Type : "+typeof(st));

var st=parseInt("475");

document.write("<br>Value : "+st);
document.write("<br>Type : "+typeof(st));


var cc=prompt("Enter Alphabet : ");

document.write("<br>user input : "+cc);
var rt=cc.toUpperCase();
document.write("<br>Uppser Case : "+rt);


var cc=prompt("Enter Alphabet : ");

document.write("<br>user input : "+cc);
var rt=cc[0].toUpperCase()+cc.slice(1).toLowerCase();

document.write("<br>Uppser Case : "+rt);


var num=35.36;

document.write("<br> Number : "+num);
var stn=num.toString();



var nm=stn.replace(".","");

document.write("<br> Result : "+nm);



var cc=prompt("Enter Username : ");

for (let index = 0; index < cc.length; index++)
 {
    
  
    if (cc.charCodeAt(index) == 64 || cc.charCodeAt(index) == 33 || cc.charCodeAt(index) == 44 || cc.charCodeAt(index) == 46) 
    {
        alert("Invalid Username")
        break;
    }
    
}


var a=prompt("Welcome To ABC Bakery.What do you want to order Sir/Madam");

var b  = a.toLowerCase();


var c = ["cake", "apple pie","cookie", "chips","patties"];

for ( var i=0; i<c.length; i++)
{
    
    if(c[i] === b )
        {
           alert(b + " is availaible at index " + i + " in our bakery");
           break;
        }
        else
        {
            
            alert("We are Sorry " + b + " is not availaible in our bakery");
            
        }
}


var a=prompt("Enter Password");

if(a.length > 6 || a[0] == 0 || a[0] == 1 || a[0] == 2 || a[0] == 3 || a[0] == 4 || a[0] == 5 || a[0] == 6 || a[0] == 7 || a[0] == 8 || a[0] == 9 || a == "")
{
    document.write("Invalid Password");
}else
{
    document.write("Correct Password");

}


var university = "University of Karachi";

var ar=university.split("");

for ( var i=0; i<ar.length; i++)
 {
document.write("<br>"+ar[i]);
 }

var cc=prompt("Enter Input : ");

document.write("<br>user input : "+cc);
var rt=cc.substring(cc.length - 1,cc.length);

document.write("<br>Last Character Of Input : "+rt);

var sen="the quick brown fox jumps over the lazy dog";

document.write(sen);
var aa=sen.split(" ");

var a=0;

for (let index = 0; index < aa.length; index++) {

    if (aa[index] == "the") {
        a++;
    }

}

document.write("<br> Total time "+a);