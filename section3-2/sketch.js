// テキスト「アニメーションの基本」
let x, y, vx, vy; //変数を関数の外で宣言することが大事！
const g = 1; // 重力加速度 constantは後から値を変えないものに使う
const vyMax = 30; // 速度のmax

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255); //ここを消すと、描画する円が残ってしまう。前回の描画を上塗りして消すために、背景を塗りつぶす作業が関数の最初に入っている。
  ellipse(x, y, 20, 20);
  x += vx; // x = x + vx のこと。vxは速さ。物体の位置を毎フレーム更新し、動き（アニメーション）を表現することができる。
  y += vy;

  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax); // 制限（数、最小、最大）

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; } // もしxがゼロより小さかったら（=キャンバスの左端から出ていたら）または　もしxが幅より大きかったら（=キャンバスの右端より出ていたら）、速度に-1をかける（=進む方向が変わる）
  if(y > height){ vy = -1 * vy; } // もしyが高さより大きかったら、y方向の速度に-1かける（=進む方向が反対になる）。今回は上に飛び出ない（思い出して、原点はキャンバスの左上だからキャンバスの上はy=0）ので、y<0はいらない
  x = constrain(x, 0, width); // 制限（数、最小、最大）。キャンバスから出ないようにしている。二行うえで定義しているのは、ただ速度を反転することであって、反転させてもキャンバス内に戻る保証はない
  y = constrain(y, 0, height);


  //マウス操作に反応する
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 30);
  }
  else{
    ellipse(mouseX, mouseY, 20);
  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

