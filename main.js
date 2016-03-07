
var imagecount = 1;
var total = 5;

function slide(x) {
    var Image = document.getElementById('img');
    imagecount = imagecount + x;
      if (imagecount > total) { imagecount = 1;}
      if (imagecount < 1) { imagecount = total;}
    Image.src ="images/img"+ imagecount + ".jpg";
    }
window.setinterval(function slideA() {
    var Image = document.getElementById('img');
    imagecount = imagecount + 1;
      if (imagecount > total) { imagecount = 1;}
      if (imagecount < 1) { imagecount = total;}
    Image.src ="images/img"+ imagecount + ".jpg";

    },2000);

$(function(){
  $('.fadein img:gt(0)').hide();
  setInterval(function(){
  $('.fadein :first-child').fadeOut()
  .next('img').fadeIn()
  .end().appendTo('.fadein');},
  3000);
});

var step=0
function slideit(){
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<1)
  step++
 else
  step=0
 setTimeout("slideit()",2500)
}


var q=25000;
 function changeImage() {
    var image = document.getElementById('therm');
    if (q<39999) {
        image.src = "images/thermometerfull.png";
   } else if (40000<q<60000) {
        image.src = "images/thermometerfull.png"
    } else {
        image.src = "images/thermometer.gif";
 }}

