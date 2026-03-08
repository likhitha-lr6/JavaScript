//Set time Out

function dummy(){
    setTimeout(() => {
        console.log("hello world")
    }, 2000);
}

// dummy()

function brush(){
    setTimeout(() => {
        console.log("Time taken for brush is 2500")
    }, 2500);
}

function bath(){
    setTimeout(() => {
        console.log("Time taken for bath is 5000")
    }, 5000);
}
function ready(){
    setTimeout(() => {
        console.log("Time taken for ready is 500")
    }, 500);
}
function eat(){
    setTimeout(() => {
        console.log("Time taken for eat is 3500")
    }, 3500);
}
function relax(){
    setTimeout(() => {
        console.log("Time taken for relax is 1500")
    }, 1500);
}

brush()
bath()
ready()
eat()
relax()