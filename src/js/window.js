import { initParticles } from "./particles";

const windowLoaded = ()=>{
    window.addEventListener('load', ()=>{
        initParticles(); 
        window.location.href = '#';
    }); 
}

export{
    windowLoaded
}