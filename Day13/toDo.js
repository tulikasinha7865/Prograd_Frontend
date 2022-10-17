function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myTask").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Task is empty.Please enter a task!");
  } else {
    document.getElementById("addTask").appendChild(li);
  }
  document.getElementById("myTask").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

