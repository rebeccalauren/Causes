$(document).ready(function() {

    $("#myDivred1").animate({
          width: "70%",
        } 
    , 2000);

    $("#countdown").countdown({until: new Date(2016, 5, 1), 
      format:"dhMS"});

    $(function(){
      $('.fadein img:gt(0)').hide();

      setInterval(function(){
        $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');
    }, 3000);
    });
});





