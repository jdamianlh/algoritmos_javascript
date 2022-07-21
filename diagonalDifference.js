/*

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  arr is shown below:

 1 2 3
 4 5 6
 9 8 9  

 The left-to-right diagonal = 1+5+9. The right to left diagonal = 3+5+9. Their absolute difference is 15-17 = 2
 Function description

  Complete the  function in the editor below.

  diagonalDifference takes the following parameter:

  int arr[n][m]: an array of integers
 */

  const arr = [[1,2,3], [4,5,6], [9,8,9]]
  let cl = 0
  let cr = 0
  let sumaleft = 0
  let sumaright = 0
  let difference = 0


  for(let i=0; i<arr.length;i++){

    for(let c=0; c<arr.length;c++){

        if(arr[i][c]!== undefined){
            if(cr<arr.length){
                sumaleft+=arr[cr][cl]
            }
            cl+=1
            cr+=1
        }
        
    }
  }
  cr=0
  cl = arr[0].length-1
  for(let i = arr.length-1; i>=0; i--){
    for(let c= arr.length-1; c>=0; c--){

        if(arr[i][c]!==undefined){
            if(cr<arr.length){
                sumaright+=arr[cr][cl]
            }
            cr++
            cl--
            
        }
    }
  }
  
  difference = (sumaleft-sumaright)
  
  if(difference<0){
    console.log('hola')
      difference = (sumaleft-sumaright) * -1
  }


  console.log(sumaleft)
  console.log(sumaright)
  console.log(difference)

