// Global $, alert, console

$(function () {
  "use strict";
  // Adjust Header Height
  var myHeader = $(".header"),
    mySlider = $(".bxslider");
  myHeader.height($(window).height());
  $(window).resize(function () {
    myHeader.height($(window).height());
    mySlider.each(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".bxslider li").height()) / 2,
      );
    });
  });

  //   Adding and Removing Active calss
  $(".links li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  // Centering The Header Text
  mySlider.each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".bxslider li").height()) / 2,
    );
  });
  //  Triger the bxSlider
  mySlider.bxSlider({
    pager: false,
  });

  // Smooth Scroll to Div
  $(".links li a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000,
    );
  });

  // Auto Slider Code
  (function autoSlider() {
    $(".slider .active").each(function () {
      if (!$(this).is(":last-child")) {
        console.log(this);
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoSlider();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".slider div").eq(0).addClass("active").fadeIn();
            autoSlider();
          });
      }
    });
  })();
  // Triger the Shuffle plugin
  $("#Container").mixItUp();

  // Adjust Shuffle Links
  $(".shuffle li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  // Trigger niceScroll
  $("body").niceScroll({
    cursorcolor: "#1abc9c",
    cursorwidth: "9px",
    cursorborder: "1px solid #1abc9c",
  });
});
