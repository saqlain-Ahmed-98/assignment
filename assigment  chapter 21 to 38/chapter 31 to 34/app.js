 var rightNow = new Date();
    document.write(rightNow);

    var c = rightNow.toString();

    var b = c.slice(3,7);
    document.write("<br>"+b);



    var b = c.slice(0,3);
    document.write("<br>"+b);

    if (b == "Sun" || b == "Sat") {
        document.write("<br>It's Funday");
    }

    var b = c.slice(7,10);
    document.write("<br>"+b);

    if (b == "15") {
        document.write("<br>First fifteen days of the month");
    }
    else{
        document.write("<br>Last days of the month");

    }

var millsSince = rightNow.getTime();

document.write("<br>crnt date "+rightNow);

document.write("<br>1970 milli second"+millsSince);

document.write("<br>1970 milli minute"+millsSince/1000/60);

var b = c.slice(15,18);

var nn=parseInt(b);
 document.write("<br>"+nn);
 if(nn > 12 )
 {
    document.write("<br>its Pm");
 }
 else{
    document.write("<br>its am");
 }



 var d = new Date();
d.setMonth(11,31)
 document.write("<br>last Date "+d);



 var doomsday = new Date("June 18, 2015");
 var msToday = d.getDate();

 var bb=((doomsday-msToday)/30)/12;

 document.write("<br> Days passed since 1st ramadan "+bb);


 var msday = new Date("Dec 5, 2015");
 var msdayss = new Date("Dec 1, 2015");

msday.getSeconds();
msdayss.getSeconds();

 var res=msday-msdayss;

 document.write("<br> second passed since 1st jan 2015 " +res);


 var cc = new Date("Dec 5, 2015");
 alert(cc);
 var n =cc.getFullYear();
 var rr=n-100;

 var ccn = new Date("Dec 5, "+rr);
 alert(ccn);


 var age=+prompt("Enter your age : ");

 var dd = new Date();

 var yy=dd.getFullYear();

 var rrs=yy-age;

 document.write("<br> Your age is : "+age);
 document.write("<br> Your birth year is : "+rrs);

 var nn=dd.toString();
 var ff=nn.slice(4,8);
var cru=410;
var uc=16;


 document.write("<br><h1> K-Electric Bill </h1>");
 document.write("<br> Your Customer Name : <b>ABC Customer</b> ");
 document.write("<br> Current Month :<b>"+ ff +"</b>");
 document.write("<br> Current Unit :<b>"+ cru +"</b>");
 document.write("<br> unit Price :<b>"+ uc +"</b>");
var ss=350;
var tl=(cru*uc)+ss;
 document.write("<br> amount payable within due date :<b>"+ uc*cru +"</b>");
 document.write("<br> late amount payable  :<b>"+ ss +"</b>");
 document.write("<br> Gross amount payable after due date  :<b>"+ tl +"</b>");
 




  




 