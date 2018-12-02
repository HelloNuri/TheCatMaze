$(".effect.img-circle").click(function() {
  $(".effect").animate({
    opacity: 0.0
  }, 2000, function() {
    $(".effect").remove();
  });
});