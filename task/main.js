/*global $, alert , console*/

$(function (){
      'use strict';
      //Adjust Header Height
     $('.header').height($(window).height());
     $(window).resize(function (){
         $('.header').height($(window).height());


     });
      //links Add active class


$('.links li').click(function (){
          $(this).addClass('active').siblings().removeClass('active');

     });

});

  //to remove background of navbar 

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 160) {
      $(".navbar").addClass("test");
    } else {
      $(".navbar").removeClass("test");
    }
  });
});

// navbar list in small screen

$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".navbar-collapse ul").css({"display":"inline-block","margin-left": "30%"});
        $(".navbar").css({"background-color":"black"});
    });
});


//four counters 

$(document).ready(function () {
    var count = 0;

    function myCount() {
        if (count < 450) {
            count += 1;
        } else if (count > 450) {
            count = 0;
        }
        $('#counter1').text(count);
    }
    setInterval(myCount, 20);

});

$(document).ready(function () {
    var count = 0;

    function myCount() {
        if (count < 800) {
            count += 1;
        } else if (count > 800) {
            count = 0;
        }
        $('#counter2').text(count);
    }
    setInterval(myCount, 0);

});

$(document).ready(function () {
    var count = 0;

    function myCount() {
        if (count < 26) {
            count += 1;
        } else if (count > 26) {
            count = 0;
        }
        $('#counter3').text(count);
    }
    setInterval(myCount, 430);

});

$(document).ready(function () {
    var count = 0;

    function myCount() {
        if (count < 200) {
            count += 1;
        } else if (count > 200) {
            count = 0;
        }
        $('#counter4').text(count);
    }
    setInterval(myCount, 0);

});


//trigger mixitup projects
$(document).ready(function(){
    $("#web").click(function(){
        $(".graphic").css({"display": "none",});
        $(".web").css({"display": "inline-block",});

    });
    $("#graphic").click(function(){
        $(".web").css({"display": "none",});
        $(".graphic").css({"display": "inline-block",});

    });
    $("#all").click(function(){
        $(".graphic").css({"display": "inline-block",});
        $(".web").css({"display": "inline-block",});

    });

});

//faq################

$(document).ready(function(){
    $(".iconchang1").click(function(){
        $("#tog1").toggle();
        $("#tog11").toggle();

    });
    $(".iconchang2").click(function(){
        $("#tog2").toggle();
        $("#tog22").toggle();

    });
    $(".iconchang3").click(function(){
        $("#tog3").toggle();
        $("#tog33").toggle();

    });
    $(".iconchang4").click(function(){
        $("#tog4").toggle();
        $("#tog44").toggle();

    });

    });


//owl carousle##########
$(document).ready(function(){
  $("#owl-example").owlCarousel({"autoplay": true,
});
});





