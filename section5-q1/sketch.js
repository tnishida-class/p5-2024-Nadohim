// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love aaaaaaaaaaa", 10, 100);
}

function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2; // padding
 
  let px = x
  let py = y
  
  fill(0);
  rect(x, y, x + w + p * 2, y + h + p * 2);
 
 
  fill(0);
  // triangle(
  //   pw - 10 / 2, ph,
  //   pw + 10 / 2, ph,
  //   pw, ph + 20
  // );


  // // しっぽ
  // triangle(
  //   w/2 - 10, h + p * 2,      // 
  //   w/2 + 10, h + p * 2,  // 
  //   w/2, h + p * 2 + 10   // 
  // );

  // テキスト
  fill(255);
  text(t, X + p, y + h + p);
  
}


//元のコード
// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
// function setup(){
//   createCanvas(400, 400);
//   background(255);
//   balloon("I love keyakizaka46");
// }
// function balloon(t){
//   let w = textWidth(t);
//   let h = textAscent() + textDescent();
//   let p = 2;
//   fill(0);
//   rect(0, 0, w + p * 2, h + p * 2);
//   fill(255);
//   text(t, p, h + p);
// }
