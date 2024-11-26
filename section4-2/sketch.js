//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw() {
  background(160, 192, 255);

  if (frameCount % 60 === 0) { // 1秒を60分割してるから、1秒ごと

    const b = {
      x: random(width),
      y: random(height),
      size: random(10, 40),
      vx: random(-5, 5), // x方向だけ速い
      vy: random(-2, 2)
    };
    balls.push(b);
  }

  for (let i = balls.length - 1; i >= 0; i--) { // 配列を逆順にループ（ボールを消す操作を正しく行うため←むずい）
    let b = balls[i];
    fill(255);
    //fill(255, 255, 0); //黄色
    noStroke();
    ellipse(b.x, b.y, b.size);
    b.x += b.vx; // 「.」は「の」と読めばよい。「bのx」
    b.y += b.vy;
    // b.size = random(1, 40)

    // ボールが画面外に出たかチェック
    if (b.x < 0 || b.x > width || b.y < 0 || b.y > height) {
      balls.splice(i, 1); // ボールを削除 iを1つ削除する
    }
  }
}

function mouseDragged() { // ドラックされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if (mag(dx, dy) > 5) { // mag(x, y)はベクトル(x, y)の長さ
    const b = { x: mouseX, y: mouseY, size: random(10,50), vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}