//console.log("Hello")
// console.warn("Something went wrong")
// console.error("error 404")

//var
console.log("a=",a)
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

//data types
//Primitive-
var g="asdf"
console.log(typeof(g))
var h=56
console.log(typeof(h))
var i=true
console.log(typeof(i))
var j
console.log(typeof(j))
var k=null
console.log(typeof(k))
var l=BigInt(535485643)
console.log(typeof(l))
var m=Symbol('#')
console.log(typeof(m))

//Non-Primitive
let n={a:1,b:24,c:5,d:3}
console.log(typeof(n))
let o= new Array(1,2,4,5,7)
console.log(typeof(o))