var eField = document.getElementById("main-content");



var c = eField.childNodes;
  var txt = "";
  var i;
  for (i = 0; i < c.length; i++) {
    txt = txt + c[i].nodeName + "<br>";
  }

  document.getElementById("na").innerHTML = txt;


  var ab = document.getElementsByClassName("render");
  var txt = "";
  var i;
  for (i = 0; i < ab.length; i++) {
    txt = txt + ab[i].nodeName + "<br>";
  }

  document.getElementById("nrendr").innerHTML = txt;



document.getElementById("first-name").value="Saqlain";
document.getElementById("last-name").value="Ahmed";
document.getElementById("email").value="saqlaina820@gmail.com";


var dsx = document.getElementById("form-content").nodeType;
  document.getElementById("ba").innerHTML = dsx;


  document.getElementById("lastName").innerHTML = "Value Changed";

  

  var nas = document.getElementById("main-content").firstChild.innerHTML;
  document.getElementById("sss").innerHTML = nas;

  var nas = document.getElementById("main-content").lastChild.innerHTML;
  document.getElementById("nwch").innerHTML = nas;


  var nas = document.getElementById("lastName").nextSibling.innerHTML;
  document.getElementById("nsb").innerHTML = nas;

  var nas = document.getElementById("lastName").previousSibling.innerHTML;
  document.getElementById("psb").innerHTML = nas;


  var nas = document.getElementById("email").parentNode.innerHTML;
  document.getElementById("pno").innerHTML = nas;

  var nas = document.getElementById("email").nodeType;
  document.getElementById("pty").innerHTML = nas;




