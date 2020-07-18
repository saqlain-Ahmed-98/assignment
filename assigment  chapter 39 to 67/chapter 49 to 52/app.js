function showData() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value
    var password = document.getElementById("pass").value


    document.getElementById("firstName").innerHTML = "First Name: " + fname;
    document.getElementById("lastName").innerHTML = "Last Name: " + lname;;
    document.getElementById("displayEmail").innerHTML = "Email: " + email;
    document.getElementById("passa").innerHTML = "Pass: " + password;

    var table = document.getElementById("mttable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = fname;
  cell2.innerHTML = lname;
  cell3.innerHTML = email;
  cell4.innerHTML = password;
  cell5.innerHTML = '<button >Edit</button>';
  cell6.innerHTML = '<button >Delete</button>';

  var index, table = document.getElementById('mttable');

for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].cells[5].onclick = function()
    {
        var c = confirm("do you want to delete this row");
        if(c === true)
        {
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
        }
    };
    
}







}


function moreDetail() {
    var fullDetail = `Hi. I'm Saqlain, an everyday Inter student hailed in Karachi, spent my life directionless like every other kid
    until I enrolled in Saylani Web and Mobile Application Development and made some cool stuff. As you go through
    my portfolio, you'll find all the exciting projects I've worked on through a dedicated course of this
    prestigious opportunity.`;
    var about = document.getElementById("AboutMe");
    about.innerHTML = fullDetail;
}


