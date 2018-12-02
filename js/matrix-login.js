// matrix animation
var c = document.getElementById("c");
var ctx = c.getContext("2d");
//canvas를 전체화면으로
c.height = window.innerHeight;
var height = c.height;
c.width = window.innerWidth;
//뭔가 있어보이는 문자열
var code = "10";
// var code = "ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ᛫᛬᛭ᛮ"
//문자열을 배열로 변환 및 크기조정
code = code.split("");
var font_size = 15;
var columns = c.width / font_size; //가로 줄 수 설정
var drops = []; //x좌표 []의 y축 값
for (var x = 0; x < columns; x++)
  drops[x] = 1; //배열값을 아무튼 초기화해야 함 랜덤으로 할 수도 있고
//글자 떨어트리도록 하는 함수
function draw() {
  //글자 설정
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#0F0"; // 글자 색
  ctx.font = font_size + "px arial"; // 크기, 글꼴

  for (var i = 0; i < drops.length; i++) {
    //code 배열에서 글자 하나를 선택
    var text = code[Math.floor(Math.random() * code.length)];
    //x축, y축 값을 구하고 그곳에 출력
    x = i * font_size;
    y = drops[i] * font_size;
    ctx.fillText(text, x, y);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (y > height && Math.random() > 0.975)
      //만약 세로 1줄을 다 채웠다면 0.025%확률로 초기화
      // 0.033초마다 실행됨
      drops[i] = 0;

    drops[i]++;
  }
}
setInterval(draw, 33);