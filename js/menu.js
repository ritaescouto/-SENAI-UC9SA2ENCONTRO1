let n = 0
let barras = document.getElementById("barras")
let menu = document.getElementById("menu")

barras.addEventListener('click',()=>{
    if(n === 0){
        menu.style.display="block"
        n+=1
    }else if(n === 1){
        menu.style.display="none"
        n=0
    }
})