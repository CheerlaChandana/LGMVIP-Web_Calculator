function clears() {
    document.getElementById("result").value = "";
}
 
// This function  will display the  values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function returns result
function calculation() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}