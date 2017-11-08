var counter = 0;

document.getElementById("email").addEventListener("keyup", function () {
  if (document.getElementById("email").checkValidity()) {
    document.getElementById("email").style.backgroundColor = "#ffffff";
  } else {
    document.getElementById("email").style.backgroundColor = "#fa8072";
  }
});

document.getElementById("form").addEventListener("click", function () {
  var bool_name = document.getElementById("name").checkValidity();
  var bool_email = document.getElementById("email").checkValidity();
  var bool_text = document.getElementById("text").checkValidity();
  if (bool_name && bool_email && bool_text) {
    counter++;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("text").value;
    var entryID = "'entry" + counter + "'";
    var entry = "<div id=" + entryID + " class=\"entries\">";
    entry += "<div>" + name + "</div>";
    entry += "<div>" + email + "</div>";
    entry += "<div>" + text + "</div>";
    entry += "<div><button id=" + entryID
      + "onclick=\"document.getElementById("
      + entryID + ").remove();\">Löschen</button>";
    entry += "</div>";
    document.getElementById("list").innerHTML += entry;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
  }
});