//console.log("Hello")
// console.warn("Something went wrong")
// console.error("error 404")

//var
var a=10;
console.log("a=",a)
var a=20                 // redeclare
console.log("a=",a)
a=30
console.log("a=",a)           //reassign


//let
let b= 12;
console.log("b=",b)
//(error) let b=20                 // redeclare
// console.log("b=",b)
b=35
console.log("b=",b)           //reassign

//const
const c=8;
console.log("c=",c)


var d=40             // scope
if(true){
    let e=60;
    let f=50;
    console.log(e,f)
}
