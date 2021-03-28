
function add(num1, num2){
    return num1 + num2;
}

function divide(num1, num2){
    return num1 /num2;
}

function spr(callback){
    const result = callback(4,6);
    console.log(result);
}

spr(divide);


// false: 0, -0, '', nall, undefined
// true: -1 'hello', 배열은 오브젝트이기 때문에 배열이 비어있어도  true임

// 클래스와 콜백함수

class Counter{
    constructor(){
        this.counter = 0;
    }

    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            runIf5Times(this.counter);
        }
    }
}

const coolCounter = new Counter();
function doSomething(num){
    console.log(`무~야~호! ${num}`);
}

coolCounter.increase(doSomething);
coolCounter.increase(doSomething);
coolCounter.increase(doSomething);
coolCounter.increase(doSomething);
coolCounter.increase(doSomething);
coolCounter.increase(doSomething);
coolCounter.increase(doSomething);
coolCounter.increase(doSomething);
coolCounter.increase(doSomething);


console.log(this);


a = 18;
console.log(this.a);

this.b = "영서는 오늘도 열심히 코딩하네~뚠뚠"
console.log(window.b);
console.log(b);
console.log(this.b);

// this는 함수를 호출하는 방법에 의해서 좌우된다.
// 비엄격모드에서 this
function f1(){
    return this;    //f1() === window; // true
}

// 엄격모드("use strict")에서 this 
function f2(){
    "use strict"; 
    return this;    //f2() === undefined; // true
}

