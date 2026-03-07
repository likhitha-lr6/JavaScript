//Anagram

let X="EARTH";
let Y="HEART";

let sortX=X.split("").sort().join("").toUpperCase();
let sortY=Y.split("").sort().join("").toUpperCase();
console.log(sortX);
console.log(sortY);
console.log(sortX===sortY);

//Palindrome

let Name="MADAM";
let reversename=Name.split("").reverse().join("");
console.log(reversename);
if(Name==reversename){
    console.log("Its is palindrome");
}
else(
    console.log("It is not a palindrome")
)

// String Reverse

let str ="javascript";
let reverse_str=str.split("").reverse().join("");
console.log(reverse_str);