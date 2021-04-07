var price = 0;

function calculate() {
    var tip = document.getElementById("tip").value;
    
    price = Math.ceil(price * (1 + tip));
    
    document.getElementById("price").innerHTML = price;
    
    var numofpeople = document.getElementById("people").value;
    var pirceperperson = price / numofpeople;
    
    while (pirceperperson % 5 != 0) {
        pirceperperson++;
    }
    
    //pirceperperson = 5 *  Math.ceil(pirceperperson / 5);
    
    document.getElementById("priceperperson").innerHTML = pirceperperson;
}

function addItem() {
    var itemPrice = document.getElementById("itemprice").value;
    price = price + Number(itemPrice);
    document.getElementById("total").innerHTML = price;
    
    var list = document.getElementById("prices");
    list.innerHTML += "<li>" + itemPrice + "</li>";
}