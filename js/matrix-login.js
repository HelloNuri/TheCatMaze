// matrix animation
var c = document.getElementById("c");
var ctx = c.getContext("2d");
//canvas를 전체화면으로
c.height = window.innerHeight;
c.width = window.innerWidth;
//뭔가 있어보이는 문자열
var code = "1001010101110101010101010010101000101011101111010101010110101010101010101110000101";
//문자열을 배열로 변환 및 크기조정
code = code.split("");
var font_size = 15;
var columns = c.width / font_size; //가로 줄 수 설정
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
  drops[x] = 1;
//drawing the characters
function draw() {
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#0F0"; //green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for (var i = 0; i < drops.length; i++) {
    //a random chinese character to print
    var text = code[Math.floor(Math.random() * code.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  }
}
setInterval(draw, 33);