var myObj;

function buildSelect() {
    var tmp = "";
            
    for (var i = 0; i < myObj.pets.length; i++) {
        tmp += '<option value="' + i + '"';
        if (i == myObj.pets.length - 1) {
            tmp += " selected";
        }
        tmp += ">"
        tmp += myObj.pets[i].name;
        tmp += "</option>";
    }

    document.getElementById("animal").innerHTML = tmp;

    //document.getElementById("animal").selectedIndex = 0;
}

function showJhon() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = myObj.name + " has " + myObj.pets.length + " animals.";
            document.getElementById("age").innerHTML = myObj.age;
            
            buildSelect();
            
            showAnimalType();
        }
    };
    xmlhttp.open("GET", "jhon.txt", true);
    xmlhttp.send();
}

function showAnimalType() {
    var idx = document.getElementById("animal").value;
    document.getElementById("animalType").innerHTML = myObj.pets[idx].animal;
}

function saveAnimal() {
    var animalType = document.getElementById("type").value;
    var animalName = document.getElementById("animalName").value;
    
    var newAnimal = {
        animal: animalType,
        name: animalName
    };
    myObj.pets.push(newAnimal);
    buildSelect();
    showAnimalType();
    
    document.getElementById("type").value = "";
    document.getElementById("animalName").value = "";
    
    document.getElementById("type").focus();
}