const mostrarmais = [...document.querySelectorAll(".mostrarmais")]

mostrarmais.map((el)=>{
    el.addEventListener("click",(evt)=>{
        let sibling = evt.target.previousElementSibling
        if(sibling == null){
            sibling = evt.target.nextElementSibling
        }
        evt.target.style.display = "none"
        sibling.style.display = "block"
        if (sibling.classList.contains("more")){
            evt.target.parentNode.parentNode.nextElementSibling.style.display = "block"
        } else {
            evt.target.parentNode.parentNode.nextElementSibling.style.display = "none"
        }
    })
})