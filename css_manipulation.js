function backgroundChange() {
  var redV = document.getElementById("redText2").value;
  var greenV = document.getElementById("greenText2").value;
  var blueV = document.getElementById("blueText2").value;
  document.getElementById(dummy) = rgb( redV, greenV, blueV) ;
}

function borderChange() {
  var redV = parseInt(document.getElementById("redText1").value);
  var greenV = parseInt(document.getElementById("greenText1").value);
  var blueV = parseInt(document.getElementById("blueText1").value);
  var widthV = parseInt(document.getElementById("widthText1").value);
  document.body.style.border-color= 'rgb(' + redV + ',' + greenV + ',' + blueV + ')';
  document.body.style.border-width= widthV;
}

function rgb(r, g, b)
{
  return "rgb (" + r + ", " + g + ", " + b + ")";
}
