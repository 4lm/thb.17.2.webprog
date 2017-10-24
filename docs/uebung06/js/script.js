var form = document.getElementById("form");
form.addEventListener("click", totalOrder, true);
form.addEventListener("submit", submitOrder);

function totalOrder() {
    var sum = 0.0;
    var order = "";
    var total = "";

    sum += parseFloat(form.size.value);
    if (form.size.value === "5") {
        order += "Pizza " + document.getElementById("size26").innerHTML + "<br>";
    } else {
        order += "Pizza " + document.getElementById("size32").innerHTML + "<br>";
    }

    var list = document.querySelectorAll("input[type=checkbox]");
    for (var item of list) {
        if (item.checked) {
            sum += parseFloat(item.value);
            order += document.getElementById(item.name).innerHTML + "<br>";
        }
    }

    total = String(sum.toFixed(2));
    total = total.replace(".", ",");
    
    document.getElementById("total").innerHTML = total + " EUR";
    document.getElementById("order").innerHTML = order;
}

function submitOrder() {
    alert("Bestellung getätigt!\n\nGesamtsumme: " + document.getElementById("total").innerHTML);
}