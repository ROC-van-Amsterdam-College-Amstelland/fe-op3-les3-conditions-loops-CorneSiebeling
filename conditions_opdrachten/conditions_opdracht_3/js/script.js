function check() {
    var saldo = document.getElementById("saldo").value  


    if (saldo == 500) {
    document.getElementById("tekst").innerHTML= "helaas geen geld";
    }else if (saldo <500){
    document.getElementById("tekst").innerHTML= "er is gestort met bonus";
    }else{
    document.getElementById("tekst").innerHTML= "uw slaris is gestort";
    }
    }