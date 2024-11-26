// 操作可能なバルーンの設定
let x, y;
let currentTextSize = 32;
const initialTextSize = 32;
const maxTextSize = 100;
const minTextSize = 10;

const greetings = [
  "こんにちは", "Hello", "Hola", "Bonjour", "Guten Tag", "Ciao", "Olá", "Привет", "你好", "안녕하세요",
  "สวัสดี", "Xin chào", "Selamat siang", "Merhaba", "Halo", "Hej", "Sawubona", "Ahoj", "Szia",
  "Tere", "Shalom", "Marhaba", "Namaste", "Kamusta", "Salam", "Buna", "Dobrý den", "Kia ora",
  "Γειά σου", "Sveiki", "Hafa Adai", "Aloha", "Salaam Alaikum", "Yassas", "Zdravo", "Labas", 
  "Goddag", "Moi", "Sannu", "Habari", "Salve"
];

const languageMap = {
  "こんにちは": "Japanese", "Hello": "English", "Hola": "Spanish", "Bonjour": "French", 
  "Guten Tag": "German", "Ciao": "Italian", "Olá": "Portuguese", "Привет": "Russian", 
  "你好": "Chinese", "안녕하세요": "Korean", "สวัสดี": "Thai", "Xin chào": "Vietnamese", 
  "Selamat siang": "Indonesian", "Merhaba": "Turkish", "Halo": "Malay", "Hej": "Danish/Swedish",
  "Sawubona": "Zulu", "Ahoj": "Czech", "Szia": "Hungarian", "Tere": "Estonian", 
  "Shalom": "Hebrew", "Marhaba": "Arabic", "Namaste": "Hindi", "Kamusta": "Filipino", 
  "Salam": "Persian", "Buna": "Romanian", "Dobrý den": "Czech", "Kia ora": "Maori", 
  "Γειά σου": "Greek", "Sveiki": "Latvian", "Hafa Adai": "Chamorro", "Aloha": "Hawaiian", 
  "Salaam Alaikum": "Arabic", "Yassas": "Greek", "Zdravo": "Serbian", "Labas": "Lithuanian", 
  "Goddag": "Danish", "Moi": "Finnish", "Sannu": "Hausa", "Habari": "Swahili", "Salve": "Latin"
};

let displayText; // 操作可能なバルーンに表示される挨拶
let displayLanguage = ""; // 操作可能なバルーンに表示される挨拶の言語
let balloons = []; // 自動で動くバルーン
const numBalloons = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentTextSize = initialTextSize;

  // 操作可能なバルーンの初期設定
  x = random(0, width);
  y = random(0, height);
  displayText = random(greetings);

  // 自動で動くバルーンの初期設定
  for (let i = 0; i < numBalloons; i++) {
    balloons.push(createBalloon());
  }
}

function draw() {
  background('#b9d08b');
  fill(0); 
  textSize(12);
  text("ひとつだけ自分が矢印キーで動かせる挨拶を探して、クリックしよう！何語なのかがでてくるよ！（ESC, Delete, Backspaceキーでリセット。SとLキーでテキストサイズを変更）", 20, 20);

  // 全てのバルーンのサイズを一斉に変える
  if (keyIsDown("L".charCodeAt(0))) { currentTextSize += 2; }
  if (keyIsDown("S".charCodeAt(0))) { currentTextSize -= 2; }

  // 文字サイズの制限
  currentTextSize = constrain(currentTextSize, minTextSize, maxTextSize);

  // 操作可能なバルーンを動かす
  if (keyIsDown(LEFT_ARROW)) { x -= 5; }
  if (keyIsDown(RIGHT_ARROW)) { x += 5; }
  if (keyIsDown(UP_ARROW)) { y -= 5; }
  if (keyIsDown(DOWN_ARROW)) { y += 5; }

  // 操作可能なバルーンをリセット
  if (keyIsDown(ESCAPE) || keyIsDown(DELETE) || keyIsDown(BACKSPACE)) {
    resetDisplay();
  }

  // 操作可能なバルーンの制限
  x = constrain(x, currentTextSize / 4, width - textWidth(displayText) - currentTextSize / 4 * 2);
  y = constrain(y, currentTextSize / 4, height - currentTextSize / 4 - textAscent() - textDescent());

  // 操作可能なバルーンを描く
  textSize(currentTextSize);
  drawBalloon(displayText, x, y, '#2c4f54');

  // 自動で動くバルーンを描く
  for (let i = 0; i < balloons.length; i++) {
    let b = balloons[i];
    b.textSize = currentTextSize; // 全バルーンのサイズを同期
    updateBalloon(b);
    drawBalloon(b.text, b.x, b.y, '#2c4f54');
  }

  // 操作可能なバルーンの言語を表示
  if (displayLanguage) { 
    fill(3);
    textSize(20);
    text("Language: " + displayLanguage, 10, height - 20);
  }
}


// 操作可能なバルーンをクリックすると、その挨拶の言語を表示
function mousePressed() {
  let w = textWidth(displayText);
  let h = textAscent() + textDescent();
  let p = currentTextSize / 4;

if (mouseX > x && mouseX < x + w + p * 2 && mouseY > y && mouseY < y + h + p * 2) {
    displayLanguage = languageMap[displayText]; // displayLanguage に languageMap[displayText] の値が代入される
  } else {
    displayLanguage = ""; // 空文字列→偽になる
  }
}

function createBalloon() {
  return {
    x: random(0, width),
    y: random(0, height),
    textSize: random(20, 80),
    xSpeed: random(-2, 2),
    ySpeed: random(-2, 2),
    textSizeChange: random(-0.5, 0.5),
    text: random(greetings)
  };
}

function updateBalloon(b) {
  b.x += b.xSpeed;
  b.y += b.ySpeed;
  b.textSize += b.textSizeChange;

  // 端にきたら反対方向に進む
  if (b.x < 0 || b.x > width - textWidth(b.text)) { b.xSpeed *= -1; }
  if (b.y < 0 || b.y > height - b.textSize * 2) { b.ySpeed *= -1; }

  // テキストサイズの制限
  if (b.textSize <= minTextSize || b.textSize >= maxTextSize) {
    b.textSizeChange *= -1;
  }
  b.textSize = constrain(b.textSize, minTextSize, maxTextSize);
}

function drawBalloon(t, x, y, bgColor) {
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = currentTextSize / 4;

  fill(bgColor);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);

  triangle(
    x + p * 2, y + h + p * 2,
    x + p * 5, y + h + p * 2,
    x + p, y + h + p * 5
  );

  fill(255);
  text(t, x + p, y + h);
}

function resetDisplay() {
  x = random(0, width);
  y = random(0, height);
  currentTextSize = initialTextSize;
  displayText = random(greetings);
  displayLanguage = "";
}