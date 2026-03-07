//Slicespice

let fruit =["Apple","Orange","fig","kiwi"]
console.log(fruit.slice(0,1))
console.log(fruit.slice(-3,-2))

console.log(fruit.splice(0,1,"StrawBerry"))// used for replace 
console.log(fruit)

console.log(fruit.splice(0,1)) // used for delete
console.log(fruit)

console.log(fruit.splice(0,0,"Strawberry","Blueberry"))
console.log(fruit)

console.log(fruit.includes("Strawberry"))
console.log(fruit)

// IndexOf and LastIndexOf

let num=[1,2,3,4,1,3,5,12,2]
console.log(num.indexOf(1))
console.log(num.lastIndexOf(1))
console.log(fruit.concat(num))

fruit.sort()
num.sort()
console.log(fruit)
console.log(num)

console.log(fruit.reverse())
console.log(num.reverse())