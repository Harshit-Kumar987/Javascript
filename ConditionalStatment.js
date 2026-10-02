// check number for positive , negative or zero;
let num = 39;
if (num > 0) {
  console.log("number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else if (num == 0) {
  console.log("Number is zero");
} else {
  console.log("invaild input");
}



//check input is vowel or not
let a = "a";
if (a == "a") {
  console.log("vowel");
} else if (a == "e") {
  console.log("vowel");
} else if (a == "i") {
  console.log("vowel");
} else if (a == "o") {
  console.log("vowel");
} else if (a == "u") {
  console.log("vowel");
} else {
  console.log("consonat");
}



//check uppercase or lowercase character
let word = "g";
let word2 = word.toUpperCase();
if (word === word2) {
  console.log("in uppercase");
} else {
  console.log("in lowercase");
}



//check angle of triangle
let al1 = 50;
let al2 = 70;
let al3 = 60;
if (al1 + al2 + al3 == 180) {
  console.log("in a triangle");
} else {
  console.log("not a triangle");
}



//input month number and print month name
let month = 2;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;

  case 3:
    console.log("MAR");
    break;

  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("aus");
    break;
  case 9:
    console.log("sep");
    break;
  case 10:
    console.log("oct");
    break;
  case 11:
    console.log("nov");
    break;
  case 12:
    console.log("dec");
    break;
  default:
    console.log("invaild input");
    break;
}



//tell youngest
let ageR = 24;
let ageS = 29;
let ageA = 28;
if ((ageR < ageS) & (ageR < ageA)) {
  console.log("Ram is youngest");
} else if ((ageA < ageR) & (ageA < ageS)) {
  console.log("Ajay is youngest");
} else {
  console.log("Shyam is youngest");
}



//number equal or not
let num1 = 4;
let num2 = 4;
let num3 = 4;
if ((num1 === num2) & (num2 === num3)) {
  console.log("equal");
} else {
  console.log("not equal");
}



//multiple of 5
let num5 = 35;
if (num5 % 5 == 0) {
  console.log("is multiple by 5");
} else {
  console.log("not multiple of 5");
}



//check alphabet or not 
let char="g";
if("Z">=char & char<="A" || "z">=char & char<="a"){
    console.log("is aplhabet");
}
else {
    console.log("not a alphabet")
}



//is perimeter is greater or area
let length =30;
let width=40;
let area=length*width;
let perimeter =2*(length+width);
if(area>perimeter){
    console.log("area is greater");
}
else if(area==perimeter){
    console.log("Equal");
}
else{
    console.log("perimeter is greater")
}