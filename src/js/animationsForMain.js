import gsap from 'gsap'

let state = 0;

const animationsForMain = ()=>{

    const btnOrdena = document.querySelector('#volver-logo')
    const divOrdena = document.querySelector('main div:nth-child(1)')
    const btnMain = document.querySelector('#saludo button')

    btnMain.addEventListener('click', ()=>{
        if(state == 0){
            divOrdena.style.display = "flex"; 

            gsap.set('main div:nth-child(1)',{
                opacity: 1,
                x: 0,
            })
    
            gsap.from('main div:nth-child(1)', {
                opacity: 0,
                duration: 0.5,
                x: 200,
                ease: 'Power2.easeOut',
            })
            state = 1; 
        }
    })
    
    btnOrdena.addEventListener('click', ()=>{
        if(state == 1){
            gsap.set('main div:nth-child(1)',{
                opacity: 1,
                x: 0,
            })
 
            gsap.to('main div:nth-child(1)', {
                opacity: 0,
                duration: 0.5,
                x: 300,
                ease: 'Power2.easeOut',
            })
            state = 0;
        }
    })
}

const getState = ()=>{
    return state; 
}

const setState = (val)=>{
    state = val; 
}

export{
    animationsForMain,
    getState,
    setState
}