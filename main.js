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