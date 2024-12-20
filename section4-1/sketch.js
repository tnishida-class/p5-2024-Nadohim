// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）
  average = sum / scores.length
  console.log(average); // console.logで出す

  largest = 0;
  for(let i = 0; i < scores.length; i++){
    // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
    if (scores[i] > largest){
      largest = scores[i]
    }
  }
  console.log(largest); // ループが終了した後にlargestの値を出すために、ここに

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    // BLANK[3]　ヒント：最大値とだいたい同じ
  if (scores[i] < smallest){
    smallest = scores[i]
  }
  }
  console.log(smallest);

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length; // 再代入できない変数dxは、キャンバスの幅/データの数
    const h = height * scores[i] / 100; // 再代入できない変数h（棒グラフの高さ）は、キャンバスの高さ×データの値÷100
    // BLANK[4] ヒント: 条件分岐を使って色を変更します
    if (scores[i] === largest){ // =だと代入だから注意
      fill(255, 0, 0);
      } else if (scores[i] === smallest){
        fill(0, 0, 255);
      } else {
        fill(130);
      }
    noStroke();
    // 棒グラフを書く
    rect(i * dx + 2, height - h, dx - 4, h);
    // スコアのテキストを表示
    fill(0)
    text(scores[i].toPrecision(3), i * dx, height - h); // 有効数字三桁
    }
    
  // BLANK[5] 平均点の線を引きます
  stroke(0, 128, 0);
  line(0, height - (height * average / 100), width, height - (height * average / 100)); //line(x,y,x,y)
  fill(0);
  noStroke();
  text(average.toPrecision(3), 0, height - height * average / 100);
}