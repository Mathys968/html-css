function Calcular(){
    let nume = document.getElementById('num')
    num = Number(nume.value)
    if(num == '0'){
        window.alert('OUOUOUOUO')
    }
    var c = 1
    var bro = document.getElementById('bro')
    var res = 0
    bro.innerHTML = "Resultado: \n"
    do{
    
    res = c * num
    bro.innerHTML+= `A multicação entre ${num}*${c} é = ${res}\n`
    c++
}while(c<=10)

}