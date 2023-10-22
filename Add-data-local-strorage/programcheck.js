// const a = 50;
// function fun() {
//     const a = 10;
//     var b = 20;
//     var c = 30;

// }
// fun();
// console.log(a);

// function x() {
//     let a = 10;
//     function y() {
//         console.log(a);

//     }
//     return y;
// }
// const c = x();
// console.log(c());
// var obj = {
//     val: 100
// };
// function fun(a, b, c) {
//     console.log(this.val + a + b + c);

// }
// const fun2 = fun.bind(obj);
// fun2(1, 2, 3);

// function y() {
//     setTimeout(() => console.log('a'), 0);
//     console.log("Done Coding");
// }
// y();



// function statement abd function delcearation
// function a() {
//     console.log(" a insde");
// }
// // function expression
// var b = function () {
//     console.log("b called");
// }
// a();
// b();
// function declearation is same as function statement

// Anonymous function or name less function
// function () {

//  }

// name function expression
// var b = function abc() {
//     console.log("b called");
// }
// parameters and arguments
// first class function ablity to use like a value;
// passing function as a prameter to a function
// if we pass a function as a prameter we can  return the function as well

// Arrow function in java script


// b();
// function a() {
//     console.log("insdie a");
// }
// var b = function d() {
//     console.log("insde b");
// }
// a();
// d();

// function fun1(a) {

//     const fun2 = (b) => {
//         a = a + b;
//         console.log(a);
//     }
// }
// fun1(10)(20);

// setTimeout(() => console.log("timer 1"), 1000);
// setTimeout(() => console.log("timer 2"), 0);

// function x(y) {
//     console.log("inside x");
//     y();
// }

// x(function y() {
//     setTimeout(() => console.log("timer y"), 0);

// })

// var fun = (a, b) =>
// var sum = a + b;
//     return sum;
//     var a = 10;
//     var b = 20;
//     console.log(fun(a, b));


console.log(printName);
console.log(a);
const a = 3;
var printName = (name) => {
    console.log(name);
}