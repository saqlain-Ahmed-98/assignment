
function power(a, b) {
    var cal = a ** b;
    alert("The value of 'a' raised to 'b' is: " + cal)
}

power(+prompt("Enter Value to Calculate power"), 2)


function isLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        alert("Given year is a leap year...")
    }
    else {
        alert("Given year is not a leap year...")
    }
}

isLeapYear(+prompt("Enter Year To check Leap or not"));


function area(a, b, c) {
    var S = (a + b + c) / 2;
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    var fixed = area.toFixed(3)
    return fixed;
}


function area(a, b, c) {
    var S = (a + b + c) / 2;
    var area = (S * (S - a) * (S - b) * (S - c));
    return area;
}
function triArea(a, b, c) {
    var ans = area(a, b, c);
    alert("The Area of Triangles is: " + ans)
}

triArea(+prompt("Enter Side 1 lenght"),+prompt("Enter Side 2 lenght"),+prompt("Enter Side 3 lenght"));

var obtainedMarks;
totalMarks = 300;

function marks() {
    var subj1 = +prompt("Enter your (1st) subject's Marks: ");
    var subj2 = +prompt("Enter your (2nd) subject's Marks: ");
    var subj3 = +prompt("Enter your (3rd) subject's Marks: ");
    document.write("");
    obtainedMarks = subj1 + subj2 + subj3;
    alert("The Obtain marks are: " + obtainedMarks )

    return obtainedMarks;
}
function average() {
    var average = obtainedMarks / 3;
    average = average.toFixed(2);
    alert("The Average of marks are: " + average )
}

function percentage() {
    var percent = ((obtainedMarks / totalMarks) * 100)
    percent = percent.toFixed(3);
    alert("Your Percentage is: " + percent + "%")
}

function mainFunction() {
    marks();
    average();
    percentage();
}

mainFunction();


function customindexof(word, character)
{
    var a;

    for (let i = 0; i < word.length; i++)
     {
      if (word[i] === character)
       {
        document.write(character+" Character index is = "+i);
      }
      else
      {
        a++;
      }    
    }
    document.write(character+" Character index not avalaible in your word " + word);

  
    
  }

  customindexof(prompt("Enter Any Word"),prompt("Enter Character To Find Word Index"));


function removeVowel(string) {
var newletr = "",letter;

    for (let i = 0; i < string.length; i++)
        {

         letter = string[i].toLowerCase();
   
          if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
           {
           
          }
          else
          {
            newletr +=letter;
          }    
        }

        document.write("Vowels Removed : "+ newletr);
}
removeVowel("Saqlain Ahmed")  


var distance = prompt("Enter the distance in KM: ");

function toMeters() {
    var meters = distance * 1000;
    document.write("Distance in meters is: " + meters + " meter. <br>");
}

function toFeet() {
    var feet = distance * 3280.8;
    feet = feet.toFixed(3)
    document.write("Distance in Feet is: " + feet + " feet. <br>");
}

function toInch() {
    var inch = distance * 39370.078740157;
    inch = inch.toFixed(4);
    document.write("Distance in Inches is: " + inch + " inch<br>");
}

function toCentimeter() {
    var cm = distance * 100000;
    cm = cm.toFixed(2);
    document.write("Distance in Centimeter is: " + cm + " Centimeter. <br>");
}

function main() {
    toMeters()
    toFeet()
    toInch()
    toCentimeter()
}

 main()


function overtime(val)
{


    if(val <= 40)
    {
        document.write("Worker Do Not Work");
    }
    else if(val > 40)
    {
        var amt=val*12;
        document.write("Overtime AMount "+amt);
    }

}
overtime(+prompt("Enter Over Time Hour"));


function curncCal(valcrncy)
{
    var necrnc=valcrncy/100;
    var for50=(valcrncy%100)/50;
    var for10=((valcrncy%100)%50)/10;
    var for1=(((valcrncy%100)%50)%10);
    
    document.write("Hunderd Note : "+Math.floor(necrnc) + "<br>");
    document.write("Fifty Rupee Note : "+Math.floor(for50)+"<br>");
    document.write("10 Rupee Note : "+Math.floor(for10)+"<br>");
    document.write(" Rupee : "+Math.floor(for1));

}

curncCal(+prompt("Enter Amount To Count Note"));