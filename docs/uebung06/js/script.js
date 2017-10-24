var form = document.getElementById("form");


form.addEventListener("click", totalOrder, true);

function totalOrder() {
    var sum = 0.0;
    var orderString = "";
    var totalString = "";

    sum += parseFloat(form.size.value);
    if (form.size.value == "5") {
        orderString += "Pizza " + document.getElementById("size26").innerHTML + "<br>";
    } else {
        orderString += "Pizza " + document.getElementById("size32").innerHTML + "<br>";
    }

    if (form.cheese.checked) {
        sum += parseFloat(form.cheese.value);
        orderString += document.getElementById("cheese").innerHTML + "<br>";
    }
    if (form.salami.checked) {
        sum += parseFloat(form.salami.value);
        orderString += document.getElementById("salami").innerHTML + "<br>";
    }
    if (form.spinace.checked) {
        sum += parseFloat(form.spinace.value);
        orderString += document.getElementById("spinace").innerHTML + "<br>";
    }
    if (form.pineapple.checked) {
        sum += parseFloat(form.pineapple.value);
        orderString += document.getElementById("pineapple").innerHTML + "<br>";
    }
    if (form.olives.checked) {
        sum += parseFloat(form.olives.value);
        orderString += document.getElementById("olives").innerHTML + "<br>";
    }
    if (form.garlic.checked) {
        sum += parseFloat(form.garlic.value);
        orderString += document.getElementById("garlic").innerHTML + "<br>";
    }

    totalString = String(sum.toFixed(2));
    totalString = totalString.replace(".", ",");
    
    document.getElementById("order").innerHTML = orderString;
    document.getElementById("total").innerHTML = totalString + " EUR";
}


form.addEventListener("submit", submit);

function submit() {
    alert("Gesamtsumme: x EUR");
}