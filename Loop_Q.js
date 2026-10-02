//print number 1 to 10
// let a=0;
// for(let i=0;i<10;i++){
//     console.log(i+1);
// }


//print number 1 to user input
//let b=parseInt(prompt("number:"));
// for(let i=0;i<b-1;i++){
//     console.log(i+1)
// }


//print fibonacci sequence
// let c =5;
// let first =0;
// let second=1;
// let next =first+second;
// for(let i=0;i<c;i++){
//     console.log(next);
//     first=second;
//     second=next;
//     next=first+second;

// }


//print factorial of a given number
// let a=6;
// let b=1;
// for(let i=a;i>1;i--){
//     b*=i;
// }
// console.log(b);


// print number of vowels in a given sentence
// let a="as dfg uj ko"; 
// let count =0;
// for(let i=0;i<a.length;i++){
//     if (a[i] == "a"|| a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u"  ) {
//         count++;
//     } 
// }
// console.log(count);


//table
// for(let i=1;i<11;i++){
//     let b=6*i;
//     console.log(b);
// }


//prime
// let num =2;
// if (num < 2){ 
//     console.log(false);
// }
// else{
//     for(let i= 2; i*i<=num ; i++ ){
//         if (num%i ==0) {
//             console.log(false);
//         }
//     }
// }



//sum of all digit in a number
// let a =34;
// let b=0;
// let c=0;
// while(a>0){
//     c=a%10;
//     b=b+c;
//     a=a / 10;
// }
// console.log(b);


// power of a number
// let a =4;
// let b=3;
// console.log(a**b);

// armstrong
let num = 1557; 
let count = 0;
let a=0;
let b=0;
let temp=0;
let temp1=num;
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
console.log(b);