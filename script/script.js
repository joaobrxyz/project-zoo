const btn_prev = document.querySelector(".prev")
const btn_next = document.querySelector(".next")
const imagens = [
    document.querySelector("#oncapintada"),
    document.querySelector("#arara"),
    document.querySelector("#jacare")
]
const img = document.querySelector(".main_imagem")
const indicadores = [...document.querySelectorAll('.indicador')]
let atual_index = 0
function attIndicador(){
    indicadores.map((el) => {
        el.classList.remove('indicador_ativo')
    })
    indicadores[atual_index].classList.add('indicador_ativo')
}
function mostrarImg(index){
    imagens.map((img)=>{
        img.style.display = 'none'
    })
    imagens[index].style.display = 'block'
    attIndicador()
}
indicadores.map((el)=>{
    el.addEventListener("click",(evt)=>{
        atual_index = parseInt(evt.target.id)
        mostrarImg(evt.target.id)  
    })
})
btn_prev.addEventListener("click", ()=>{
    atual_index = (atual_index === 0) ? imagens.length - 1 : atual_index - 1
    mostrarImg(atual_index)
    mudarTemp(10000)
})
function next(){
    atual_index = (atual_index === imagens.length - 1) ? 0 : atual_index + 1
    mostrarImg(atual_index)
}
function mudarTemp(time) {
    clearInterval(img_temp)
    img_temp = setInterval(next, time)
}
btn_next.addEventListener("click",()=>{
    next()
    mudarTemp(10000)
})
let img_temp = setInterval(next, 4000)
