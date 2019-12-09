//javascript code
var letter = ["A", "B", "C", "D","E"]
for (let i = 0; i <= 5; i++) {
  task(i);
}

function task(i) {
  setTimeout(function() {
    document.getElementById("uitkomst").innerHTML = letter[i];
  }, 2000 * i);
}

