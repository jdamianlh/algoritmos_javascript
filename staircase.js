/*
Staircase detail

This is a staircase of size n=4:

   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer

*/

const staircase = n => {


    let estrella = ''
    let espacio = ' '
    let contador=n-2
    console.log(contador)

    for(let i = 0; i < n; i++){

        estrella+='#'
        console.log(espacio.repeat(contador), estrella)
        contador--
        if(contador===-1){
            estrella+='#'
            console.log(estrella)
            return
        }
    }

}

staircase(6)