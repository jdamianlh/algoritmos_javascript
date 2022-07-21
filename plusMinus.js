/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example
arr=[1,1,0,-1,-1]
There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000


*/
let arr=[1,1,0,-1,-1]
let positive=0
let negative=0
let zero=0

for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
        zero+=1
    }else if(arr[i]>0){
        positive+=1
    }else{
        negative+=1
    }
}
if(positive>0){
    positive = (positive/arr.length).toFixed(6)
}
if(negative>0){
    negative = (negative/arr.length).toFixed(6)
}
if(zero>0){
    zero = (zero/arr.length).toFixed(6)
}


console.log(positive)
console.log(negative)
console.log(zero)