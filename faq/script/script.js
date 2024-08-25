const faq_question = [...document.querySelectorAll(".faq-question")]

faq_question.map((el)=>{
    el.addEventListener("click",(evt)=>{
        let sibling = evt.target.previousElementSibling
        if(sibling == null){
            sibling = evt.target.nextElementSibling
        } 
        if (sibling.classList.contains("mostrarmais")){
            if(sibling.firstElementChild.style.display != "block") {
                sibling = sibling.firstElementChild
            } else {
                sibling = sibling.lastElementChild
            }
        }
        if (evt.target.classList.contains("faq-question")){
            sibling = evt.target.firstElementChild.nextElementSibling
            if(sibling.firstElementChild.style.display != "block") {
                sibling = sibling.firstElementChild
            } else {
                sibling = sibling.lastElementChild
            }
        }
        let sibling2 = sibling.nextElementSibling
        if(sibling2 == null){
            sibling2 = sibling.previousElementSibling
        }
        sibling2.style.display = "none"
        sibling.style.display = "block"
        if (sibling2.classList.contains("more")){
            //sibling.style.display = "block"
            //console.log(sibling)
            sibling.parentNode.parentNode.nextElementSibling.style.display = "none"
        } else {
            sibling2.parentNode.parentNode.nextElementSibling.style.display = "block"
        }
    })
})