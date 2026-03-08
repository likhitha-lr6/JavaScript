//Promise

function roomclean(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            let room=true;
            if(room){
                resolve("room is cleaned")
            }
            else{
                reject("room is not cleaned")
            }
        }, 4000);
    })
}

function utensilswash(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let wash=true;
            if(wash){
                resolve("Utensils are washed")
            }
            else{
                reject("Utensils are not washed")
            }
        }, 2000);
    })
}

function cooking(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let cook=true;
            if(cook){
                resolve("Food is ready")
            }
            else{
                reject("Food is not cooked")
            }
        }, 5000);
    })
}

roomclean().then((el)=>{console.log(el); return utensilswash()})
           .then((el2)=>{console.log(el2); return cooking()})
           .then((el3)=>{console.log(el3); return console.log("ALL WORKS ARE DONE")})
           .catch((err)=>{console.log("ERROR :", err)})