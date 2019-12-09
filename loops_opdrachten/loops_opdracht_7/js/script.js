var tekst = "";
for (var i = 1; i <= 100; i += 1) {

    tekst += i + "<br>";

    if (i % 3) {
        tekst += "vet" + "<br>";
    } 
    else if (i % 5) {
        tekst += "cool"  + "<br>";
    }
console.log(i)
}

document.getElementById("uitkomst").innerHTML = tekst;