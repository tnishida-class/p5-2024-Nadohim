// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    background(255);
    textSize(16);
    textAlign(CENTER, CENTER);

    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    for (let i = 0; i < 7; i++);
    fill(0);
    text(daysOfWeek[i], )
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0); // 4で割り切れるかつ100で割り切れない年or400で割り切れる年
}

function daysInYear(y){
  // BLANK[1]
  if ( (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0) ){
    return 366;
    }
    else{
    return 365;
    }
}

let year = 2025;
console.log(year + "年は" + daysInYear(year) + "日です");

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  let totalDays = 0;

  for (let i = 1970; i < y; i ++){ // 1970.1.1は木曜日
    totalDays += daysInYear(i);
  }

  totalDays += dayOfYear(y, m, d) - 1;

  return (totalDays + 4) % 7
}


function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}

let y = 2004, m = 11, d = 11;
console.log(y + "年" + m + "月" + d + "日は" + dayOfWeekAsString(dayOfWeek(y, m, d)) + "曜日です");
