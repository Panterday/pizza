import { animationsForEspecialidades } from "./animationsForEspecialidades";
import { animationsForPromociones } from "./animationsForPromociones";
import { initParticles } from "./particles";

const windowLoaded = ()=>{
    window.addEventListener('load', ()=>{
        initParticles(); 
        animationsForPromociones();
        animationsForEspecialidades(); 
        window.location.href = '#';
    }); 
}

export{
    windowLoaded
}