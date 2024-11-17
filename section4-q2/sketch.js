// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){
     total += scores[i];
  }

  // BLANK[1] 円グラフを描く
  let start = - HALF_PI;
  for (let i = 0; i < scores.length; i++){
    let stop = start + TWO_PI * (scores[i] / total);
  // fill(100 + i * 15, 100 + i * 15, 200, 150);
  
  const centerX = 200 // 円の中心のx座標
  const centerY = 200 // 円の中心のy座標
  const diameter = 340 // 円の直径

  stroke(0);
  strokeWeight(1);
  arc(centerX, centerY, diameter, diameter, start, stop, PIE); // 7番目のパラメーターはオプショナル。PIEと書くと弧の半径を縁取ってくれる

  x = centerX + (0.7 * diameter / 2) * cos((start+stop)/2); // 文字を出す座標。中心のx座標＋0.7半径×中心のcosここの式めっちゃ難しかった！！start+stop/2にするのがコツ
  y = centerY + (0.7 * diameter / 2) * sin((start+stop)/2);

  text(scores[i].toPrecision(3), x, y); // 有効数字三桁  
  
  // 次のループでstartを更新
  start = stop;

  

  }
}


