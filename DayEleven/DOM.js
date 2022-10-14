const myInterval = setInterval(setColor, 1000);

function setColor() {
  let x = document.getElementById("section1");
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

function stopColor() {
  clearInterval(myInterval);
}
const myTimeout = setTimeout(formHeading, 5000);

function formHeading() {
  document.getElementById("demo").innerHTML = "GENERAL INFORMATION"
}
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Are you sure you want to Submit?");
});

document.querySelector("p").style.backgroundColor = "red";

const nodeList = document.querySelectorAll(".content");
document.getElementById("count").innerHTML = nodeList.length;





