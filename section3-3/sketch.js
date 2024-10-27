// テキスト「キーボード操作に反応する」
let x, y;
let vy = 0 //垂直速度
const gravity = 0.5
const jumpStrength = -10 // ジャンプの強さ（上にはねるためにマイナスにしてる）



function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 25);
  noStroke();
  fill('#ffff00');
  ellipse(x, y, 40);

  // 左右・上下の運動
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }

  // ジャンプ機能
  y += vy;
  vy += gravity;

  // 地面に達したら跳ね返りを止める
  if (y > height - 20){// yが画面の高さ-円の半径より大きかったら＝画面より下にいたら
  y = height - 20; // 地面に設置
  vy = 0; // y位置を固定=動きをとめる
 } 
  
  // 画面外に出ないように
  x = constrain(x, 0, width); 
  y = constrain(y, 0, height - 20);
}

function keyPressed(){
  if (key === ' '){
    if (y === height - 20){ // 地面に設置しているとき
      vy = jumpStrength; // vyに上で定義した値を代入
    }
  }
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

// function KeyPressed(){
//  if(keyCode == UP_ARROW)
  

// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
