// ダーツ

// 以下ローカル変数を使う方法

function setup() {
  const green = color(0, 255, 0); // 緑色
  const red = color(255, 0, 0); // 赤色
  const black = color(0); // 黒色
  const cream = color(242, 212, 147); // クリーム色
  createCanvas(400, 400); // キャンバス作成
  background(255); // 背景色を白に設定
  stroke(255); // 枠線を白に設定
  strokeWeight(3); // 枠線の太さを3に設定

  // 中心を (cx, cy) にする
  const cx = width / 2; 
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

   // 変数をデバッグ用に出力
   console.log("Canvas Width:", width, "Canvas Height:", height);
   console.log("Center:", cx, cy);
   console.log("Max Radius:", maxR);

  drawCircle(black, maxR); // 黒くい一番大きな円を書く
  drawArcs(green, red, maxR * 0.8); // 一番大きな円の0.8倍の円を書く
  drawArcs(cream, black, maxR * 0.75); 
  drawArcs(green, red, maxR * 0.5); 
  drawArcs(cream, black, maxR * 0.45); 
  drawCircle(green, maxR * 0.1);
  drawCircle(red, maxR * 0.05);


function drawCircle(c, r){ // cという色で、直径はr
  fill(c); // cで塗りつぶす
  ellipse(cx, cy, r, r); // 楕円（中心のx座標、中心のy座標、幅、高さ）
}

function drawArcs(c1, c2, r) { 
  for (let i = 0; i < 20; i++) { // iは0~19で繰り返し
    let start = TWO_PI / 20 * i; // i/20th of a full circle。TWO_PIは2πのこと
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2); // ?はcompact version of an if-else。iを2で割ったあまりがtrueならc1、falseならc2で塗りつぶす。
    arc(cx, cy, r, r, start, stop, PIE);
  }
}
}

// 以下グローバル変数を使う方法

// let cx, cy; // グローバル変数として定義

// function setup() {
//   const green = color(0, 255, 0); // 緑色
//   const red = color(255, 0, 0); // 赤色
//   const black = color(0); // 黒色
//   const cream = color(242, 212, 147); // クリーム色
//   createCanvas(400, 400); // キャンバス作成
//   background(255); // 背景色を白に設定
//   stroke(255); // 枠線を白に設定
//   strokeWeight(3); // 枠線の太さを3に設定

//   // 中心を (cx, cy) に設定（グローバル変数に値を代入）
//   cx = width / 2; 
//   cy = height / 2;
//   const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

//   // 変数をデバッグ用に出力
//   console.log("Canvas Width:", width, "Canvas Height:", height);
//   console.log("Center:", cx, cy);
//   console.log("Max Radius:", maxR);

//   drawCircle(black, maxR); // 黒い一番大きな円を書く
//   drawArcs(green, red, maxR * 0.8); // 一番大きな円の0.8倍の円を書く
//   drawArcs(cream, black, maxR * 0.75); 
//   drawArcs(green, red, maxR * 0.5); 
//   drawArcs(cream, black, maxR * 0.45); 
//   drawCircle(green, maxR * 0.1); // 中心に緑の小さい円を描く
//   drawCircle(red, maxR * 0.05); // 中心に赤のさらに小さい円を描く
// }

// function drawCircle(c, r){ // cという色で、直径はr
//   fill(c); // cで塗りつぶす
//   ellipse(cx, cy, r, r); // 楕円（中心のx座標、中心のy座標、幅、高さ）
// }

// function drawArcs(c1, c2, r) { 
//   for (let i = 0; i < 20; i++) { // iは0~19で繰り返し
//     let start = TWO_PI / 20 * i; // i/20th of a full circle。TWO_PIは2πのこと
//     let stop = TWO_PI / 20 * (i + 1);
//     fill(i % 2 == 0 ? c1 : c2); // 偶数ならc1、奇数ならc2で塗りつぶす
//     arc(cx, cy, r, r, start, stop, PIE); // 弧を描く
//   }
// }