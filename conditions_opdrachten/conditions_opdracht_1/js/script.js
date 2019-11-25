//javascript code
function check() {
    var saldo = document.getElementById("saldo").value  


if (saldo<25) {
    document.getElementById("tekst").innerHTML= "uw saldo is te laag";
} else {
    document.getElementById("tekst").innerHTML= "";
    }
}