// 小手調べ
function setup(){

  createCanvas(120,120); //X軸120, y軸120の座標を描く
  background(255);//colorを表すsyntax(=構文)は沢山ある
  noFill();//fill(0,0)と同じことを表す

  for(let i = 0; i < 10; i++){ //繰り返し
    let d = (i + 1)*10;
    console.log(d); //ブラウザのコンソールに情報を出力する。dの値を確認。
    
    if (i < 5){
      stroke(0,0,255); //青に塗りつぶす

    } else {
        stroke(255,0,0); //赤に塗りつぶす
      }
    ellipse(60,60,d); //楕円（中心のX座標、中心のY座標、幅、高さ）今回は幅も高さもどちらも直径dとした

  }
}
