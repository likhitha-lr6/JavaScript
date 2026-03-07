//Task 1

let names=["India","USA","UK","Canada","NZ","Ireland"]
let Splt=names.filter((arr)=>arr.length>3)
console.log(Splt)

let Upcase=names.map((arr)=>arr.toUpperCase())
console.log(Upcase)

//Task 2

let cart=[
    {item:"Book",Price:120,quantity:2},
    {item:"Pen",Price:10,quantity:5},
    {item:"Bag",Price:500,quantity:1}
]
for(let key in cart){
    console.log("Total Cost :" ,cart[key].Price*cart[key].quantity)
}
for(let Keys of cart){
    console.log("Details of First Item : ",Keys.item)
}

cart.forEach((arr)=>{
    console.log(arr.item.toUpperCase())
})