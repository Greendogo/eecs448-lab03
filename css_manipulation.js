function backgroundChange() {
  var mydiv = document.getElementById("dummy");
  var redV = document.getElementById("redText2").value;
  var greenV = document.getElementById("greenText2").value;
  var blueV = document.getElementById("blueText2").value;
  mydiv.style.backgroundColor = 'rgb(' + redV + ',' + greenV + ',' + blueV + ')';
}

function borderChange() {
  var mydiv = document.getElementById("dummy");
  var redV = document.getElementById("redText1").value;
  var greenV = document.getElementById("greenText1").value;
  var blueV = document.getElementById("blueText1").value;
  var widthV = document.getElementById("widthText").value;
  mydiv.style.borderColor = 'rgb(' + redV + ',' + greenV + ',' + blueV + ')';
  mydiv.style.borderWidth = widthV + "px";
}

function rgb(r, g, b)
{
  return "rgb (" + r + ", " + g + ", " + b + ")";
}
