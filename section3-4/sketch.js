// テキスト「インタラクティブなアニメーション」
let x, y, vx, vy;
let grabbed; // 円をつかんでいるかどうかを記憶するために使う変数

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
  grabbed = false; // 初期設定として何も掴まれていない状態にする
}


function draw(){
  background(160, 192, 255);
  ellipse(x, y, 30);
  if(!grabbed){ // つかんでいないときだけアニメーションさせる。!は否定演算子
    x += vx;
    y += vy;
    if(x < 0 || x > width){ vx = -0.8 * vx; }
    if(y < 0 || y > height){ vy = -0.8 * vy; }
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
}

// スペースキーを押したらリセット
function keyPressed(){
  if(key == " "){
    x = width / 2;
    y = height / 2;
    vx = 0;
    vy = 0;
    grabbed = false;
  }
}

// マウスが押された時、マウスと円の距離が近かったら掴む
function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 30; // distは２点の距離を求める関数
}

// 動かすとついてくる
function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
  }
}

// 離すと、掴んでいたなら止まる
function mouseReleased(){
  if(grabbed){
    grabbed = false;
    vx = mouseX - pmouseX;
    vy = mouseY - pmouseY;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
