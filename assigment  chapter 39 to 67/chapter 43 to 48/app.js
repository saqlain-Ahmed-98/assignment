// Task: 03
function delRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

// 

var count = 0;
function increase() {
    count += 1
    document.getElementById("counter").innerHTML = count;
}

function decrease() {
    count -= 1;
    document.getElementById("counter").innerHTML = count;
}