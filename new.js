//class 
class Car{
    constructor(name, year){
        this.name = name ;
        this.year = year;

    }
    age(){
        const date= new Date()
        return date.getFullYear() - this.year;
    }
}
const myCar = new Car( "Volvo", 2002)
console.log(myCar.age())

//Arrow Function
 let masum = "";
 masum = function() {
    return "Masum is a good boy"
 }
 console.log(masum())

 let anamika = ""
 anamika = () => {
    return "Anamika is a 12 vatari"
 }
 console.log(anamika())

 let fokinni = "";
 fokinni = (val) => "Shamim" + val;
 console.log(fokinni( " akta bisso fokinni"))

 let multiple = "";
 multiple = (a,b) => a*b;
 console.log(multiple(20,33))