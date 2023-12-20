let Hom = 0
let Mul = 0
   function Enviar(){
    let sexo = document.getElementsByName('sex')
    let altu = document.getElementById('alt')
    let alt = []
    let gênero = ''
    let res = document.getElementById('res')
    
    //gênero//
    if(sexo[0].checked){
        gênero = 'Homem'
    } else if(sexo[1].checked){
        gênero = 'Mulher'
    } else{
        'Marque algo'
    }
    //Altura//
    if(Number(altu.value) > 2.64){
        window.alert('TITÃ COLOSSAL????')
    }

 

    //CALC//
    
 alt.push(Number(altu.value))
    let maior = alt[0]
    let menor = alt[0]
    for(let pos in alt){
        if(alt(pos) > maior){
            maior = alt(pos)
        }
    }

    if(gênero == 'Homem'){
        res.innerHTML = ''
        Hom++
        res.innerHTML += `Um Homem com a altura ${Number(altu.value)} ${Hom} ${maior}.`
        
    } else if(gênero == 'Mulher'){
        res.innerHTML += `Uma Mulher com a a altura ${Number(altu.value)} ${Mul}.`
    }else{
        res.innerHTML += 'ERRO'
    }

   

    res.innerHTML += `O maior de todos tem a altura ${maior}`
}


/*
 let i = 1 + 1
 for(let i = 0; i < 10; i++){
    Enviar()
 }
    */