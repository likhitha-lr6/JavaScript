//For Methods
// For in

let obj={
    name:"PIT",
    domain:"CSE Dept",
    course:"Testing"
}

for(let key in obj){
    console.log(key)
    console.log(obj[key])
    console.log(key,":",obj[key])
}

//for of

let arr=["one","two","three","four"]

for(let dummy of arr){
    console.log(dummy)
}

// for each

let num=[1,2,"three","four",5]

num.forEach((val,ind)=>{
    console.log(val,ind)
})

//MRF Methods
 let mrf=[1,2,3,4,5,6,7,8,9]

 // map

 let add=mrf.map((val)=>val+5)
 console.log(add)

 //Filter
 let even=mrf.filter((val)=>val%2==0)
 console.log(even)

 //reduce

 let sum=mrf.reduce((acc,val)=>acc+val,1000)
 console.log(sum)