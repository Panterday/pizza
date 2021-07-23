import { initParticles } from "./particles";

const windowLoaded = ()=>{
    window.addEventListener('load', ()=>{
        initParticles(); 
    }); 
}

export{
    windowLoaded
}