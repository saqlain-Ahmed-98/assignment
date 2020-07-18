


for (let i = 1; i<=15; i++) 
{

var imgArray = new Array();
imgArray[i] = new Image();
imgArray[i].src = "images\\others\\"+[i]+".jpg";

var x = document.createElement("IMG");
x.setAttribute("src", imgArray[i].src);
x.setAttribute("width", "304");
x.setAttribute("height", "228");
x.setAttribute("alt", "alt");
x.setAttribute("onClick", "getModel();");
document.body.appendChild(x);

}


