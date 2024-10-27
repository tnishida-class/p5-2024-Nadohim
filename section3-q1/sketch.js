//練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let increment;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  increment = 1 // 初期状態の増加量
}

function draw(){
  background(160, 192, 255);
  
  count = (count + increment) % cycle; // 「count + その時の速さ を cycleで割ったあまり」をcountに代入。
  
  
  if (count < cycle / 2){size = count + 50;} else {size = (cycle - count) + 50;} // countが0~50のときはsizeが50~100, countが50~100のときはsizeが100~50になること
  
  
  if (keyIsPressed) { increment = 2; } else { increment = 1; } 
  
  
  ellipse(width / 2, height / 2, size); // sizeは円の直径と定義
}
