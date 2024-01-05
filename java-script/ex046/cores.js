const cores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
 const text = document.getElementById('text')
    const but = document.getElementById('butão')
   
   
   but.addEventListener('click', function(){
   let hexcolor = '#'
   for(let i = 0; i <6; i++){
    hexcolor += cores[getRandomNumber()]
   }

    text.textContent = hexcolor
    but.style.backgroundColor = hexcolor
    document.body.style.backgroundColor = hexcolor
    
    
})

function getRandomNumber(){
    return Math.floor(Math.random() * cores.length)
}
