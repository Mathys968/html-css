let Hom = 0
let AltH = []
let Mul = 0
   function Enviar(){
    let sexo = document.getElementsByName('sex')
    let altu = document.getElementById('alt')
    let gênero = ''
    let res = document.getElementById('res')
    
    //gênero//
    if(sexo[0].checked){
        gênero = 'Homem'
        Hom++
        AltH.push(Number(altu.value))
    } else if(sexo[1].checked){
        gênero = 'Mulher'
        Mul++
    } else{
        'Marque algo'
    }
    //Altura//
    if(Number(altu.value) > 2.64){
        window.alert('TITÃ COLOSSAL????')
    }

    

    
 
    //CALC//
    if(gênero == 'Homem'){
        res.innerHTML = ''
        res.innerHTML += `REGISTRO FEITO!!` 
    } else if(gênero == 'Mulher'){
        res.innerHTML = ''
        res.innerHTML += `REGISTRO FEITO!!`
    }else{
        res.innerHTML += 'ERRO'
    }

}



function Confi(){ 
    res.innerHTML = ''
    let soma = 0
    let maior = AltH[0]
    let menor = AltH[0]
    for(let i = 0; i < AltH.length; i++){
    soma += AltH[i]
    if(AltH[i] > maior){
        maior = AltH[i]
    } else if(AltH[i] < menor){
        menor = AltH[i]
    }
    }
    res.innerHTML += `<br> Essa é a média de altura entre os homens, Média: ${soma/Hom}`
    res.innerHTML += `<br> Essa é a quantidade de mulheres registrada: ${Mul}`
    res.innerHTML += `<br> A maior altura entre eles é: ${maior}`
    res.innerHTML += `<br> A menor altura entre eles é ${menor}`
}
/*
alt.push(Number(altu.value))
    let maior = alt[0]
    let menor = alt[0]
    for(let pos in alt){
        if(alt(pos) > maior){
            maior = alt(pos)
        }
    }

 let i = 1 + 1
 for(let i = 0; i < 10; i++){
    Enviar()
 }
    */