// Class

class Info{
    name="Likhitha"  //properties
    age=25
    native="Chennai"
    details(){
        console.log("my name is "+this.name+ ",my age is " +this.age+ ", my native is " + this.native)
    }
}

let print=new Info
print.details()

class Flower{
    constructor(name,colour,fragrance,season){
        this.name=name
        this.colour=colour
        this.fragrance=fragrance
        this.season=season
    }
    fdetails(){
        console.log("my name is "+this.name+", my colour is "+this.colour)
        console.log('my fragrance is '+this.fragrance+' and my season is '+this.season)
    }
}

let rose= new Flower("Rose","Red","Mild","All season")
rose.fdetails()


