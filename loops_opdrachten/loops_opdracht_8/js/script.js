var tekst = "";
for (var i = 1; i <= 100; i += 1) {

  tekst += i + "<br>";

  if (i == 25) {
    parseInt(alert("Het getal is 25 BULLSEYE"));
  }

  console.log(i);
}

document.getElementById("uitkomst").innerHTML = tekst;