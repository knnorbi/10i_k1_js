function check() {
    var email = "proba@asd.hu";
    var pass = "1234";
    
    document.getElementById("WEmail").style.display = "none";
    document.getElementById("WPass").style.display = "none";
    
    var formEmail = document.getElementById("email").value;
    var formPass = document.getElementById("password").value;
    
    if (email == formEmail && pass == formPass) {
        document.getElementById("loginAlert").style.display = "block";
    }
    else {
        if (email != formEmail) { document.getElementById("WEmail").style.display = "block";
        document.getElementById("email").value = "";
        }
        else if (pass != formPass) { document.getElementById("WPass").style.display = "block";
        document.getElementById("password").value = "";
        }
    }
}