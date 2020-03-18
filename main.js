const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const color4 = document.getElementById('color4')
const color5 = document.getElementById('color5')
const brush = document.querySelector('.current-brush')
const square = document.querySelectorAll('.square')

const changeBrush = function(x){
    brush.classList.replace(brush.classList[1], x.target.classList[1])
}

for (const item of square){
    let changeSquare = function(){
        item.classList.replace(item.classList[1], brush.classList[1])
    }
    item.addEventListener('click', changeSquare)
}

color1.addEventListener('click', changeBrush)
color2.addEventListener('click', changeBrush)
color3.addEventListener('click', changeBrush)
color4.addEventListener('click', changeBrush)
color5.addEventListener('click', changeBrush)






