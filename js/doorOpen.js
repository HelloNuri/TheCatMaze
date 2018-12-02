var tc = 0
$('.backDoor').click(function() {
  if (tc == 0) {
    $('.leftDoor').toggleClass('leftDoorOpen');
    $('.rightDoor').toggleClass('rightDoorOpen');
    tc = 1;
    var jq = document.createElement('link');
    jq.rel = "stylesheet";
    jq.href = "../css/exitStorm.css";
    setTimeout(function() {
      document.getElementsByTagName('head')[0].appendChild(jq);
    }, 2200);
    setTimeout(function() {
      $('#gate').css('display', 'none');
    }, 6000);
  }

});