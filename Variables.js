// Introduction to JS

console.log("Javascript")

//variables

//let | var | const

let fruit;   //Variable declaration
fruit="apple";
let frut="orange";
let num1=10,num2=20;

console.log("my variables : ", fruit,frut,num1,num2)

//re-declare

//let veg="potato"
//let veg="tomato"    //can't re-declare

//const veg="potato"
//const veg="tomato"  //can't re-declare

var veg="potato";
var veg="tomato";
console.log(veg)      //can re-decalre

//re-assign

let colour="red"
colour="black"
console.log(colour)   //can re-assign

//const pet="dog"
//pet="cat"
//console.log(pet)    //can't re-assign

var pet="dog"
pet="cat"
console.log(pet)       //can re-assign

//scope
//{ 
    let one=1
    const two=2
    var three=3
//}

//console.log(one)  //block
//console.log(two)  //block
//console.log(three)  //function

//hoisting



const movie="coolie"
console.log(movie)