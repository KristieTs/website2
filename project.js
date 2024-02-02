const burgEl = document.querySelector('.burger')
const navEl = document.querySelector('.nav-wrapper')
const iEl = document.querySelector('#i')
      
burgEl.addEventListener('click', () => {
    navEl.classList.toggle('active')
    if(iEl.classList == 'fa-solid fa-bars'){
        iEl.setAttribute('class', 'fa-solid fa-x')
    }
    else{
        iEl.setAttribute('class', 'fa-solid fa-bars')
    } 
})


const liEls = document.querySelectorAll('.nav-wrapper>ul>li>a')
const ulEls = document.querySelectorAll('.nav-wrapper>ul>li>ul')

liEls.forEach(liEl => {
    liEl.addEventListener('click', ()=>{
        if(window.innerWidth <= 992){  
            ulEls.forEach(ulEl=>{
                if(ulEl.classlist == 'static'){
                    ulEl.classList.remove('static')
                }  
            })
            ulEls[liEl.getAttribute('data-id')].classList.toggle('static')
        }   
    })
})
