let arr = [12,3,2,1,8]


/*let value = []
    
    for(let i = 0; i < arr.length; i++){

        const result = arr.filter(num => num!=arr[i])

        let sum = result.reduce((a, b) => a + b, 0)
        value.push(sum)
    }

    let minSum = value[0]
    let maxSum = value[0]

    for(let i = 0; i < value.length; i++){
        if(minSum > value[i]){
            minSum=value[i]
        }
    }

    for(let i = 0; i < value.length; i++){
        if(maxSum < value[i]){
            maxSum=value[i]
        }
    }
|
console.log(minSum, maxSum)*/
// let min = arr[0];
// let max = min;
// let sum = min;
// for (let i = 1; i < arr.length; i++) {
//     sum += arr[i];
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log((sum - max) + " " + (sum - min))
arr.sort((a,b) => a-b);
    console.log(String(arr.slice(0,4).reduce((a,b)=>a+b)) + ' ' + String(arr.slice(1,5).reduce((a,b)=>a+b)));
