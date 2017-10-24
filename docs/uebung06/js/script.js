var form = document.getElementById("form");
form.addEventListener("click", totalOrder, true);
form.addEventListener("submit", submit);

function totalOrder() {
    var sum = 0.0;
    var order = "";
    var total = "";

    sum += parseFloat(form.size.value);
    if (form.size.value == "5") {
        order += "Pizza " + document.getElementById("size26").innerHTML + "<br>";
    } else {
        order += "Pizza " + document.getElementById("size32").innerHTML + "<br>";
    }

    if (form.cheese.checked) {
        sum += parseFloat(form.cheese.value);
        order += document.getElementById("cheese").innerHTML + "<br>";
    }
    if (form.salami.checked) {
        sum += parseFloat(form.salami.value);
        order += document.getElementById("salami").innerHTML + "<br>";
    }
    if (form.spinace.checked) {
        sum += parseFloat(form.spinace.value);
        order += document.getElementById("spinace").innerHTML + "<br>";
    }
    if (form.pineapple.checked) {
        sum += parseFloat(form.pineapple.value);
        order += document.getElementById("pineapple").innerHTML + "<br>";
    }
    if (form.olives.checked) {
        sum += parseFloat(form.olives.value);
        order += document.getElementById("olives").innerHTML + "<br>";
    }
    if (form.garlic.checked) {
        sum += parseFloat(form.garlic.value);
        order += document.getElementById("garlic").innerHTML + "<br>";
    }

    total = String(sum.toFixed(2));
    total = total.replace(".", ",");
    
    document.getElementById("total").innerHTML = total + " EUR";
    document.getElementById("order").innerHTML = order;
}

function submit() {
    alert(
        "Bestellung getätigt!\n\nGesamtsumme: " + document.getElementById("total").innerHTML + " EUR");
}