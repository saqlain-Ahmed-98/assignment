

var array1 = [['',''],['','']];


var a = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];


for (var i=0; i<3; i++) 
{
   for (var j=0; j<4; j++) 
     {
      document.write(" " + a[i][j]);
     }
     document.write("</br>");
}



for(var k=0; k<=10; k++) 
{
    document.write("<br>" + k);
}


var tabl=+prompt("Enter Table No : ");

var lengt=+prompt("Enter Table Lenght : ");

document.write("<br><br>Table No : " + tabl);
document.write("<br>Table Lenght : " + lengt);

for(var k=1; k<=lengt; k++) 
{
    document.write("<br>"+tabl + " x " + k + " = " + tabl*k);
}

document.write("</br>");
 
var fruits = ["apple", "banana", "mango", "orange","strawberry"]

for(var l=0; l<fruits.length; l++) 
{
    document.write("<br>" + fruits[l]);
}

document.write("</br>");

for(var l=0; l<fruits.length; l++) 
{
    document.write("<br> Element at Index "+ l + " is " + fruits[l]);
}


document.write("</br>");

document.write("</br>");

document.write("<b>Counting:</b>");

document.write("</br>");

for(var l=0; l<=15; l++) 
{
    document.write( l + ",");
}


document.write("</br>");

document.write("<b>Reverse Counting:</b>");

document.write("</br>");

for(var m=10; m>0; m--) 
{
    document.write( m + ",");
}


document.write("</br>");

document.write("<b>Even:</b>");

document.write("</br>");

for(var l=0; l<=20; l++) 
{
    if(l%2==0)
    {
        document.write( l + ",");
    }
    
}


document.write("</br>");

document.write("<b>Odd:</b>");

document.write("</br>");

for(var l=0; l<=20; l++) 
{
    if(l%2!=0)
    {
        document.write( l + ",");
    }
    
}


document.write("</br>");

document.write("<b>Even:</b>");

document.write("</br>");

for(var l=1; l<=20; l++) 
{
    if(l%2==0)
    {
        document.write( l + "k,");
    }
    
}

document.write("</br>");
document.write("</br>");

var bak = ["cake", "apple pie", "cookie", "chips", "patties"]

var bakIn=prompt("Welcome To ABC Bakery.What do you want to order Sir/Madam");

for( var i=0; i<=10; i++)
{
    if(bakIn === bak[i])
        {
            document.write(bakIn + " is availaible at index " + i + " in our bakery");
            break;
        }
        else
        {
            document.write("We are Sorry " + bakIn + " is not availaible in our bakery");
            break;
        }
}

document.write("</br>");
document.write("</br>");

var maxx = [24, 53, 78, 91, 12];

document.write("Array Item "+maxx);
document.write("</br>");
document.write("The Largest Number is "+Math.max(...maxx));


document.write("</br>");
document.write("</br>");

var maxx = [24, 53, 78, 91, 12];

document.write("Array Item "+maxx);
document.write("</br>");
document.write("The smallest Number is "+Math.min(...maxx));



document.write("</br>");
document.write("</br>");

for(var l=5; l<=100; l=l+5) 
{
        document.write( l + ", ");
}
