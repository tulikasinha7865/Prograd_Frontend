function alertFunction() {
    alert("This is an alert box!");
}

function confirmFunction() {
  if (confirm("Press a button!")) {
    alert("You pressed OK!");
  } else {
    alert("You pressed Cancel!");
  }
}

function promptFunction() {
    var name = prompt("Please enter your name:", "Tulika Sinha");
    if (name == null || name == "") {
      alert("User cancelled the prompt.");
    } else {
      alert("Hello " + name + "! How are you today?");
    }
  }