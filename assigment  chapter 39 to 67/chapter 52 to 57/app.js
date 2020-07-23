


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
x.setAttribute("onClick", "getModel(this);");
x.setAttribute("data-toggle", "modal");
x.setAttribute("data-target", "#exampleModalCenter");
document.body.appendChild(x);


}

function getModel(e)
{
    var getimg=document.getElementById('setImg');
    getimg.setAttribute('src',e.src);
    getimg.setAttribute('width','300px');
    getimg.setAttribute('height','300px');
}


