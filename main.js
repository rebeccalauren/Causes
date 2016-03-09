$(document).ready(function() {

$("#myDivred1").animate({
        width: "70%",
      } 
  , 2000);
});

/*$("#clock").countdown({
  until: new Date(2016, 5, 1), format:"dhM"});*/

setInterval(
  function(){
    var dateTime = new Date();
    var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
    $("#milliseconds").text(dateTime.getMilliseconds());
    $("#seconds").text(dateTime.getSeconds());
    $("#minutes").text(dateTime.minutesTwoDigitsWithLeadingZero);
    $("#hours").text(dateTime.getHours());
  },
  500)

//$(selector).countdown({until: liftoffTime, format: 'dHM'});
//$(selector).countdown({since: new Date(2014, 12-1, 25)});
//dec 25 2014

$(function(){
  $('.fadein img:gt(0)').hide();
  setInterval(function(){
  $('.fadein :first-child').fadeOut()
  .next('img').fadeIn()
  .end().appendTo('.fadein');},
  3000);
});






