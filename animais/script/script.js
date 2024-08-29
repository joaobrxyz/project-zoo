const btn_aves = document.querySelector("#btn_aves")
const btn_mamiferos = document.querySelector("#btn_mamiferos")
const btn_repteis = document.querySelector("#btn_repteis")

const aves = [...document.querySelectorAll(".aves")]
const mamiferos = [...document.querySelectorAll(".mamiferos")]
const repteis = [...document.querySelectorAll(".repteis")]

btn_aves.addEventListener("click",()=>{
    btn_aves.classList.add("selecionado")
    btn_mamiferos.classList.remove("selecionado")
    btn_repteis.classList.remove("selecionado")
    aves.map((el)=>{
        el.style.display = 'flex'
    })
    mamiferos.map((el)=>{
        el.style.display = 'none'
    })
    repteis.map((el)=>{
        el.style.display = 'none'
    })
})

btn_mamiferos.addEventListener("click",()=>{
    btn_mamiferos.classList.add("selecionado")
    btn_aves.classList.remove("selecionado")
    btn_repteis.classList.remove("selecionado")
    mamiferos.map((el)=>{
        el.style.display = 'flex'
    })
    aves.map((el)=>{
        el.style.display = 'none'
    })
    repteis.map((el)=>{
        el.style.display = 'none'
    })
})

btn_repteis.addEventListener("click",()=>{
    btn_repteis.classList.add("selecionado")
    btn_aves.classList.remove("selecionado")
    btn_mamiferos.classList.remove("selecionado")
    repteis.map((el)=>{
        el.style.display = 'flex'
    })
    aves.map((el)=>{
        el.style.display = 'none'
    })
    mamiferos.map((el)=>{
        el.style.display = 'none'
    })
})