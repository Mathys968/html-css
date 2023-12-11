function Calcular(){
    let nume = document.getElementById('num')
    num = Number(nume.value)
    if(num == '0'){
        window.alert('OUOUOUOUO')
    }
    var ten = 0
    var c = 1
    var bro = document.getElementById('bro')
    while(c <= 10){
        ten = num * c
        c++
        bro.innerHTML += `${ten}<br>`
    }
}