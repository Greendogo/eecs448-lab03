var goAgain = false;
var imageTimout;
function submit() {
  var pword1 = document.getElementById("pword1").value;
  var pword2 = document.getElementById("pword2").value;
  if((pword1.length < 8 || pword2.length < 8) && (pword1 != pword2))
  {
    goAgain = false;
    alert("Passwords did not match and at least one was too short!");
  }
  else if(pword1.length < 8 || pword2.length < 8)
  {
    goAgain = false;
    alert("Password was not long enough!");
  }
  else if (pword1 == pword2)
  {
    goAgain = true;
    document.getElementById("spark").src = 'images/giphy.gif';
    alert("Passwords matched!");
    clearTimeout(imageTimout);
    imageTimout = setTimeout(finishImage, 10600);
  }
  else {
    goAgain = false;
    alert("Passwords did not match!");
  }
}

function finishImage() {
  if(goAgain)
    imageTimout = setTimeout(finishImage, 10600);
  else
    document.getElementById("spark").src = 'images/giphy_flat.png';
}
