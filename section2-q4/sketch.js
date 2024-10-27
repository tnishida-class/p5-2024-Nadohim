// // カタールの国旗（縦横比11:28の世界一細長い国旗）

function setup(){
  const wine = color("#8d1b3d"); // カタールが経験してきた幾多の戦争で流された血を意味する
  const white = color("#ffffff"); 
  createCanvas(280, 110);
  noStroke();

  // 左側の白い部分を描画
  fill(white);
  rect(0, 0, 80, 110);

  // 右側の赤い部分を描画
  fill(wine);
  rect(80, 0, 200, 110); 

  // 白い三角形を描画
  fill(white);
  let triangleHeight = 110 / 9; // 各三角形の高さを設定
  let triangleWidth = 20; // 各三角形の幅を設定

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 各三角形のx, y座標を計算して繰り返し描画
      let x1 = 80;
      let y1 = i * triangleHeight;
      let x2 = 80 + triangleWidth;
      let y2 = y1 + triangleHeight / 2;
      let y3 = y1 + triangleHeight;

      // 三角形を描画
      triangle(x1, y1, x2, y2, x1, y3);
    }
  }
}





// 韓国の国旗（複雑すぎて断念）

// function setup() {
//   const blue = color("#0047a0");
//   const red = color("#cd2e3a");
//   const black = color(0, 0, 0);
//   createCanvas(300, 200);
//   let w = width;
//   let h = height;
//   let r = 100; // 大きい円の直径
//   noStroke();
//   background(255);

//   // 
//   translate(w / 2, h / 2); // キャンバスの中心を基準にする
//   rotate(PI / 4); // 1/4PI (45度) 回転させる

//   // 赤い円を描く
//   {
//     fill(red);
//     let start = -PI;
//     let stop = 0;
//     arc(0, 0, r, r, start, stop); // translateを使ったので座標を0, 0に変更
//   }

//   // 青い半円を描く
//   {
//     fill(blue);
//     let start = 0;
//     let stop = PI;
//     arc(0, 0, r, r, start, stop); // 同様に0, 0に
//   }

//   // 小さい赤い半円を描く
//   {
//     fill(red);
//     let start = 0;
//     let stop = PI;
//     arc(-r / 4, 0, r / 2, r / 2, start, stop); // translateされているので、基準点からの相対位置
//   }

//   // 小さい青い半円を描く
//   {
//     fill(blue);
//     let start = -PI;
//     let stop = 0;
//     arc(r / 4, 0, r / 2, r / 2, start, stop); // 同様に相対位置
//   }
// }
