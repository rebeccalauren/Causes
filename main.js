

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
