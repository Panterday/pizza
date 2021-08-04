import gsap from 'gsap'
import { getState, setState } from './animationsForMain';

export const animationsForNavbar = ()=>{

    let state = 0;

    document.querySelector('header span').addEventListener('click', ()=>{
        const menuNav = document.querySelector('nav');
        
        if(getState() == 1){
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

            setState(0);
        }
            

        if(state == 0){
            menuNav.style.display = "flex"; 

            gsap.set('nav',{
                opacity: 1,
                x: 0,
            })
    
            gsap.from('nav', {
                opacity: 0,
                duration: 0.5,
                x: -200,
                ease: 'Power2.easeOut',
            })
            state = 1; 
        }else{
            gsap.set('nav',{
                opacity: 1,
                x: 0,
            })
 
            gsap.to('nav', {
                opacity: 0,
                duration: 0.5,
                x: -300,
                ease: 'Power2.easeOut',
            })
            state = 0; 
        }
    })

    const menuOptions = document.querySelectorAll('nav a'); 

    menuOptions.forEach(element => {
        element.addEventListener('click', ()=>{
            if(state == 1){
                gsap.set('nav',{
                    opacity: 1,
                    x: 0,
                })
     
                gsap.to('nav', {
                    opacity: 0,
                    duration: 0.5,
                    x: -300,
                    ease: 'Power2.easeOut',
                })
                state = 0; 
            }
        })
    });
}