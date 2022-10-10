function checkPlaindrome() {
    var num = Number(document.getElementById("checkNumber").value);
    var num1 =num;
    var rev=0,rem=0;
    while(num>0)
    {
        rem = num%10;
        rev = (rev*10) + rem;
        num = parseInt(num/10);
    }
    if (rev == num1) {
        alert("It is Palindrome");
      } else {
        alert("Sorry, not a Plaindrome.");
      }
  }