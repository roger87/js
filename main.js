console.log("我是 JS!!!");

document.getElementById("box1").innerHTML = ("X__X");

var a = 6;
var b = 1.5;
var c = "文字";
var d = true;

console.log(a);

a = c * 95;

console.log(a);

//指定符號**
var a = 66;

a = a**3;

console.log(a);

var num1 = 66;

 num1 += 6;

 console.log("指定運算子" + num1);

function functionA() {
    console.log("我是函式X__X")
}

functionA();

function functionB() {
    console.log("我是函式0__0")
}

functionB();

function addTen(number){
    number += 10;

    console.log("加十" + number);
}

addTen(7);
addTen(100);

function mul(a , b) {
    console.log("數字相乘的結果"+ (a * b));
}

mul(999, 7);


var car = {
    brand:"BMW",
    cc:2000,
    color: "gold",
    drive: function(){
        console.log("de ja vu");
    }
}

console.log("汽車的牌子:" + car.brand);

car.drive();

var box2 = document.getElementById("box2");

box2.onclick = () => {
    console.log("點擊!");
}

box2.onmouseenter = () =>{
    console.log("滑入!");
}

box2.onmouseleave = () => {
    console.log("滑出!");
}

var numbers = [10, 100, 40, 9];

console.log("陣列第三筆資料:" + numbers[2]);

numbers[0] = 999;

console.log("陣列第一筆資料:" + numbers[0]);

console.log("陣列的數量:" + numbers.length);

var testA = 100;
var testB = 50;

console.log(testA < testB);

var testC = 7;
var testD = "7";

console.log("==的結果:" + (testC == testD));
console.log("===的結果:" + (testC === testD));

var testE = true;

console.log("顛倒:" + !testE);

console.log(true && true);
console.log(true && false);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(true || false);
console.log(false || false);

if(!false) {
    console.log("我是高金say");
}

if (18 < 19) {
    console.log("我是羅成員");
} else {
    console.log("我是uzra");
}

var score = document.getElementById("score");
var result = document.getElementById("result");

score.onchange = () => {
    var s = parseInt(score.value);

    if ( s >= 60) {
    result.innerText = "分數:" + s + "-及格";
    } else if (s >= 40) {
        result.innerText = "分數:" + s + "-補考";
    } else {
        result.innerText = "分數:" + s + "-被當";
    }
}