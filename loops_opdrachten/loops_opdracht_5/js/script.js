var tekst = "";
for (var i = 0; i <= 20; i += 1) {
    rest = i % 2;
    if (rest == 0) {
        tekst += i + "<br>";
    } else {
        console.log(i)
    }
}
document.getElementById("uitkomst").innerHTML = tekst;