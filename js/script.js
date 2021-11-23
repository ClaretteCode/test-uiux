$( document ).ready(function () {
  $(".moreCard").slice(0, 3).show();
    if ($(".moreCard:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreCard:hidden").slice(0, 10).slideDown();
      if ($(".moreCard:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('transparent');
    } else {
      $('nav').removeClass('transparent');
    }
  });