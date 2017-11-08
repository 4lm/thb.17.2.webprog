var counter = 0;

document.getElementById("name").addEventListener("keyup", function () {
  var bool_name = document.getElementById("name").checkValidity();
  if (bool_name) {
    document.getElementById("name").style.backgroundColor = "#ffffff";
  } else {
    document.getElementById("name").style.backgroundColor = "#fa8072";
  }
});
document.getElementById("email").addEventListener("keyup", function () {
  var bool_email = document.getElementById("email").checkValidity();
  if (bool_email) {
    document.getElementById("email").style.backgroundColor = "#ffffff";
  } else {
    document.getElementById("email").style.backgroundColor = "#fa8072";
  }
});
document.getElementById("text").addEventListener("keyup", function () {
  var bool_text = document.getElementById("text").checkValidity();
  if (bool_text) {
    document.getElementById("text").style.backgroundColor = "#ffffff";
  } else {
    document.getElementById("text").style.backgroundColor = "#fa8072";
  }
});

document.getElementById("button").addEventListener("click", function () {
  var bool_name = document.getElementById("name").checkValidity();
  var bool_email = document.getElementById("email").checkValidity();
  var bool_text = document.getElementById("text").checkValidity();
  if (bool_name) {
    document.getElementById("name").style.backgroundColor = "#ffffff";
  } else {
    document.getElementById("name").style.backgroundColor = "#fa8072";
  }
  if (bool_email) {
    document.getElementById("email").style.backgroundColor = "#ffffff";
  } else {
    document.getElementById("email").style.backgroundColor = "#fa8072";
  }
  if (bool_text) {
    document.getElementById("text").style.backgroundColor = "#ffffff";
  } else {
    document.getElementById("text").style.backgroundColor = "#fa8072";
  }
  if (bool_name && bool_email && bool_text) {
    counter++;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("text").value;
    var entryID = "'entry" + counter + "'";
    var entry = "<div id=" + entryID + " class=\"entries\">";
    entry += "<div>Name: <span class=\"entry\">" + name + "</span></div>";
    entry += "<div>E-Mail: <span class=\"entry\">" + email + "</span></div>";
    entry += "<div>Nachricht: <span class=\"entry\">" + text + "</span></div>";
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