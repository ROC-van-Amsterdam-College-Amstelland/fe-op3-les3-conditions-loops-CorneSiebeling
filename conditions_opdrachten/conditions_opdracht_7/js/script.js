function check() {
    var saldo = document.getElementById("saldo").value  

    //hier heb ik neer gezet dat als het getal precies 500 is komt er "uw salaris is gestort" te staan
        if (saldo == 500) {
    document.getElementById("tekst").innerHTML= "uw salaris is gestort";
    }
    //hier heb ik neer gezet dat als het getal hoger is dan 500 dan "uw salaris is gestort met bonus" te staan
    else if (saldo >500){
    document.getElementById("tekst").innerHTML= "uw salaris is gestort met bonus";
    }
    // hier heb ik neer gezet dat als het getal anders is dan opgegeven wat hier boven staat. in dit geval minder dan 500. komt er "helaas geen geld" te staan
    else{
    document.getElementById("tekst").innerHTML= "helaas geen geld";
    }
    }