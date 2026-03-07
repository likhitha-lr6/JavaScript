//Function declaration

function info(name,age){
    console.log("Name:",name)
    console.log("Age:",age)
}

info("Neha",24)
info("Mahi",13)

//Function expression or anonymous function
let fruits=function(name,colour){
    console.log("I am", name,"my colour is", colour)
}
fruits("apple","red")
fruits("grapes","green")

//Arrow Function
let movie=(tickets,snacks,parking,fuel)=>{
    console.log(tickets+snacks+parking+fuel)
}
movie(350,150,25,300)

//iife
//(function(){
    
 //   console.log("Hello JS")
//})()

// function 
// syntax
//  function key(){
//     console.log("hello");
//  }
//  key();


// Function statement and Declaration
// Function Expression or Anonymous Function
// Immediate Invoke Function expression
// Arrow Function

//  function statement and declaration 
// parameter & argument


// function box(fun) {
//     console.log(fun);
// }
// box("java")

// function expression
// const js =function block (){
// console.log("hi iam java");
// }
// js();

// anonymous function

const a = function (){
console.log("javascript");
}
a();

// immediate invok function expression -->
 (function(trend){
console.log(trend);
 })
 ("techonology");

// arrow function
// syntax
// const my=()=>{console.log("trends")}
// my();
