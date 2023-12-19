let sexo = document.getElementsByName('name')
let gênero = ''
let cabelo = document.getElementById('cabelo')
let res = document.getElementById('res')
let ret = document.getElementById('ret')
let tot18 = 0
let tot25 = 0
function Confirmar(){
let bro = document.getElementById('idade')
let idade = Number(bro.value)
    if(sexo[0].checked){
        gênero = 'Homem'
    } else if (sexo[1].checked){
        gênero =  'Mulher'
    } else{
        window.alert('MARQUE OU DESISTA')
    }

    if(gênero == 'Homem' && cabelo.value == 'Castanho' && idade > 18){
        res.innerText = ''
        tot18++
        res.innerText += `Total de Homens com mais de 18 e cabelos castanhos ${tot18}`
    } else if (gênero == 'Mulher' && idade > 25 && idade <= 30 && cabelo.value == 'Loiro'){
        ret.innerText = ''
        tot25++
        ret.innerText += `Total de Mulheres com mais de 25 e menos de 30 e com cabelos Loiros ${tot25}`
    }else{
        res.innerText += 'Deu algum erro'
    }

}