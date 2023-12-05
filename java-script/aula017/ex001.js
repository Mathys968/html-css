var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas`)
if(horas <= 5){
    console.log('Madrugadinha')
    }else if(horas <= 12){
        console.log('Bom dia')
    } else if(horas <=18 ){
        console.log('Boas Tardes')
    } else{
        console.log('Boas noites')
    }