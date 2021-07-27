import style from "../styles.css";
import { main } from "./main";
import { navbar } from "./navbar";
import { initParticles } from "./particles";
import { windowLoaded } from "./window";

import 'material-icons/iconfont/material-icons.css';

export const init = ()=>{
    windowLoaded(); 
    navbar();
    main();  
}

