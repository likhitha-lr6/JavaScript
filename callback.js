//Callback

function orderfood(dummy){
    setTimeout(() => {
        console.log("I am going to order food")
        dummy()
    }, 4000);
}

function eatfood(){
    setTimeout(() => {
        console.log("Order Delivered, goint to eat food")
    }, 3000);
}

// orderfood(eatfood)

//Callback hell

function brush(a){
    setTimeout(() => {
        console.log("Time taken for brush is 2500")
        a()
    }, 2500);
}

function bath(b){
    setTimeout(() => {
        console.log("Time taken for bath is 5000")
        b()
    }, 5000);
}
function ready(c){
    setTimeout(() => {
        console.log("Time taken for ready is 500")
        c()
    }, 500);
}
function eat(d){
    setTimeout(() => {
        console.log("Time taken for eat is 3500")
        d()
    }, 3500);
}
function relax(){
    setTimeout(() => {
        console.log("Time taken for relax is 1500")
    }, 1500);
}

brush(()=>{
    bath(()=>{
        ready(()=>{
            eat(relax)
        })
    })
})