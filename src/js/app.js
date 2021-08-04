import style from "../styles.css";
import { animationsForMain } from "./animationsForMain";
import { animationsForNavbar } from "./animationsForNavbar";
import { main } from "./main";
import { navbar } from "./navbar";
import { initParticles } from "./particles";
import { windowLoaded } from "./window";

export const init = ()=>{
    animationsForNavbar(); 
    animationsForMain(); 
    windowLoaded(); 
    navbar();
    main();  
}

