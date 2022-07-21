
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

