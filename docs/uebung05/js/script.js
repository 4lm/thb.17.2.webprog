var form = document.getElementById("form");

form.addEventListener("submit", submit);

function submit() {
    var sum = 0.0;
    var sumString = "";

    sum += parseFloat(form.size.value);
    if (form.cheese.checked) {
        sum += parseFloat(form.cheese.value);
    }
    if (form.salami.checked) {
        sum += parseFloat(form.salami.value);
    }
    if (form.spinace.checked) {
        sum += parseFloat(form.spinace.value);
    }
    if (form.pineapple.checked) {
        sum += parseFloat(form.pineapple.value);
    }
    if (form.olives.checked) {
        sum += parseFloat(form.olives.value);
    }
    if (form.garlic.checked) {
        sum += parseFloat(form.garlic.value);
    }

    // Formatiere den Floatwert
    sumString = String(sum.toFixed(2));
    sumString = sumString.replace(".", ",");

    alert("Gesamtsumme: " + sumString + " EUR");
}