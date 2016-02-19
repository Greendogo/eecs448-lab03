var picnum = 1;
function next() {
  picnum++;
  if(picnum > 6)
    picnum = 1;

  if(picnum == 1)
      document.getElementById("gallery").src = 'images/bees.gif';
  else if (picnum == 2)
      document.getElementById("gallery").src = 'images/london_night.jpg';
  else if (picnum == 3)
      document.getElementById("gallery").src = 'images/ronSmash.gif';
  else if (picnum == 4)
      document.getElementById("gallery").src = 'images/SexyCrab.jpg';
  else if (picnum == 5)
      document.getElementById("gallery").src = 'images/yule.gif';
  else if (picnum == 6)
      document.getElementById("gallery").src = 'images/awesome.png';
}

function previous() {
  picnum--;
  if(picnum < 1)
    picnum = 6;

  if(picnum == 6)
      document.getElementById("gallery").src = 'images/awesome.png';
  else if (picnum == 5)
      document.getElementById("gallery").src = 'images/yule.gif';
  else if (picnum == 4)
      document.getElementById("gallery").src = 'images/SexyCrab.jpg';
  else if (picnum == 3)
      document.getElementById("gallery").src = 'images/ronSmash.gif';
  else if (picnum == 2)
      document.getElementById("gallery").src = 'images/london_night.jpg';
  else if (picnum == 1)
      document.getElementById("gallery").src = 'images/bees.gif';

}
