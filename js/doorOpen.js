var tc = 0
$('.backDoor').click(function() {
  if (tc == 0) {
    $('.leftDoor').toggleClass('leftDoorOpen');
    $('.rightDoor').toggleClass('rightDoorOpen');
    tc = 1;
  }
  var jq = document.createElement('link');
  jq.rel = "stylesheet";
  jq.href = "../css/exitStorm.css";
  setTimeout(function() {
    document.getElementsByTagName('head')[0].appendChild(jq);
    var song1 = document.createElement('audio');
    song1.autoplay = "ture";
    song1.class = "attach_audio";
    song1.src = "../mp3/storm1.mp3";
    song1.type = "audio/mpeg";
    var song2 = document.createElement('audio');
    song2.autoplay = "ture";
    song2.class = "attach_audio";
    song2.src = "../mp3/storm2.mp3";
    song2.type = "audio/mpeg";
    $('#song').append(song1);
  }, 2200);
  setTimeout(function() {
    $('#gate').css('display', 'none');
  }, 6000);
  setTimeout(function() {
    $(".hos").click(function() {
      document.location.href = "../html/maze_list.html";
    });

  }, 28000);

});