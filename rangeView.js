/*

this is range view algorithm
given a number for example 123213 the first number on the left: 1 has one of vision on his
right and one on his left so he can only see 2 on his right but nothing on his left,
the second: 2 
hast two range of vision on his right so he can see 3 and 2 and on his left onlye can see 1

1: only see 2 = 2
2: on his right 3, 2 . on his left 1 = 3+2+1
3: on his right 2, 1, 3 . on his left 2, 1 = 2+1+3+2+1
2: on his right 1, 3 . on his left 3, 2  = 1+3+3+2
1: on his right 1 . on his left 3 = 1 +3
1: on his right nothing . on his left 1, 2, 3 = 1+2+3

*/



const rangeViewNumber = (num) => {

    let arreglo = num.toString().split('').map(numero => Number(numero))
    console.log(arreglo)
    let valor = []
    let suma = 0
    let menor = 0
    let repite = 0;

    for(let i=0;i<arreglo.length;i++){

        if(arreglo[i-1] === undefined){
            let z = arreglo[i]
            for(let x=1; x <= z; x++){
                suma+=arreglo[x]
            }
            valor.push(suma)
            suma=0
        }else if(arreglo[i+1] === undefined){
            let z = arreglo[i]
            for(let c = arreglo.length-1; c >= 0; c--){
                z--
                if(z>=0){
                    suma+=arreglo[c-1]
                }
            }
            valor.push(suma)
            suma=0
        }
        else{
            let z = arreglo[i]
            for(let y=i;y<=arreglo.length;y++){
                z--
                if(z>=0 && arreglo[y+1]!== undefined){
                    suma+=arreglo[y+1]
                }
            }
            let w = arreglo[i]
            for(let y=i;y>=0;y--){
                w--
                if(w>=0 && arreglo[y-1]!== undefined){
                    suma+= arreglo[y-1]
                }
            }
            valor.push(suma)
            suma=0
        }
    }
    console.table(valor)

    for(let cont=0;cont<valor.length;cont++){
        if(valor[cont+1]< valor[cont]){
            menor = valor[cont+1]
        }
        
    }
    for(let cont=0;cont<valor.length;cont++){
        if(valor[cont] === menor){
            repite+=1
        }
    }
    if(repite>=2)
    return true
    console.log(repite)
}

console.log(rangeViewNumber(342213))
// rangeViewNumber(342213)

