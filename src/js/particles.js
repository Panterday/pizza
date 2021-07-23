import 'particles.js'; 
import { config } from './particles-config';

const initParticles = ()=>{
    const particlesJS = window.particlesJS;
    particlesJS('particles-js', config(), null)
}

export{
    initParticles
}
