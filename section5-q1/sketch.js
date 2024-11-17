// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love aaaaaaaaaaa");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2; // padding
  fill(0);
  rect(0, 0, w + p * 2, h + p * 2);

  // しっぽ
  triangle(
    w/2 - 10, h + p * 2,      // 上部の中心点
    w/2 + 10, h + p * 2,  // 左下
    w/2, h + p * 2 + 10   // 右下
  );

  // テキスト
  fill(255);
  text(t, p, h + p);
  
}




