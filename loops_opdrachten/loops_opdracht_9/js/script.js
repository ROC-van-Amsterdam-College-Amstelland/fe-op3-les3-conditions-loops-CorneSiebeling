
for (let i=0; i<=5; i++) { 
    task(i); 
 } 
   
 function task(i) { 
   setTimeout(function() { 
    if (i == 1) {
                document.getElementById("uitkomst").innerHTML = "Het Einde";
            } 
       
       // Add tasks to do 
   }, 2000 * i); 
 } 
 document.getElementById("uitkomst").innerHTML = "Het Begin Begint"