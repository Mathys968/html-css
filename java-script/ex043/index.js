/*function Stri(palavra){
    console.log(palavra.toUpperCase())
   return palavra
    
}

toString((Stri('Mateus'))) */


function Numb(primo){
    for(let i = 2; i <= primo; i++){
    
    let m = 2
    bandera = true
    while(bandera && m < i){
        if(i % m == 0){
          bandera = false   
        } else {
        m++
    }

    if(bandera && primo > 1){
        console.log('Primo')
    }
}
}
}

Numb(8)
