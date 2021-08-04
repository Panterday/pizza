import { animationsForPromociones } from "./animationsForPromociones";
import { initParticles } from "./particles";

const windowLoaded = ()=>{
    window.addEventListener('load', ()=>{
        initParticles(); 
        animationsForPromociones(); 
        /* window.location.href = ''; */
    }); 
}

export{
    windowLoaded
}