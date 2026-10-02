// let a=function(){
//     console.log("hello");
// }
// a();


let hi = () => {
    console.log("helllo")
}
// hi()


let print1To10 = function(){
    for(let i=1;i<11;i++){
        console.log(i);
    }
}
// print1To10();


function num1toa(a){
    for(let i=0;i<a-1;i++){
        console.log(i+1);
    }
}
// num1toa(10);



function fibonacci(c){
    let first =0;
    let second=1;
    let next =first+second;
    for(let i=0;i<c;i++){
        console.log(next);
        first=second;
        second=next;
        next=first+second;
    }
}
// fibonacci(5);


function table(a){
let b=1;
for(let i=a;i>1;i--){
    b*=i;
}
console.log(b);
}
// table(6);


function vowels(a){ 
let count =0;
for(let i=0;i<a.length;i++){
    if (a[i] == "a"|| a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u"  ) {
        count++;
    } 
}
console.log(count);
}
// vowels("asdfghjkertyui");



function prime(num){
    if (num < 2){ 
        return (false);
    }
    else if(num>=2){
        for(let i= 2; i*i<=num ; i++ ){
            if (num%i ==0) {
                return (false);
            }
        }
    }
    return (true);
}
// console.log(prime(6));



// correction required
function primeupto(num){
    let count=0; 
    if (num < 2){ 
        console.log("no number")
    }
    else{
            for(let i=2;i<num;i++){
                for(let j=2;j<num;j++){
                        if (i%j!=0) {
                            console.log(i);
                    }
                }
            }
        }
}
// primeupto(6);



// sum of all digit in a number
function sumdigitInNumber(a){
    let b=0;
    let c=0;
    while(a>0){
        c=a%10;
        b=b+c;
        a=a / 10;
    }
    console.log(b);
}
// sumdigitInNumber(35)



// sum of even number 
function sumEvenTo100(){
    let a=100
    let i=0
    let sum=0 ;
    for(;i<=a;i++){
        if(i%2==0){
            sum+=i
        }
    }
    console.log(sum);
}
// sumEvenTo100();


function armstrong(num){ 
let count = 0;
let a=0;
let b=0;
let temp=0;
let temp1=num;
let temp2=num;
while(temp1>0){
    count++;
    temp1=Math.floor(temp1/10);
}
for (let i=0; i<count;i++){
    temp=num%10;
    a =temp**count;
    b=b+a;
    // console.log(b);
    num=Math.floor(num/10)
}
console.log("armstrong value: "+b);
if(temp2==b){
    console.log(true);
}
else{
    console.log(false)
}
}
// armstrong(153)



function reverse(num){
    let temp=0
    let rev=0
    let reminder=0
    while(num>0){
        temp=num%10;
        rev=reminder+temp;
        reminder=rev*10
        num=Math.floor(num/10)
    }
    console.log(rev)
}
reverse(385456);