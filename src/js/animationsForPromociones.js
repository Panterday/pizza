import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animationsForPromociones = ()=>{

    gsap.from('#promociones h4',{
        scrollTrigger: {
            trigger: '#promociones h4',
            markers: true,
            start: 'top 50%'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#sect1',{
        scrollTrigger: {
            trigger: '#sect1',
            markers: true,
            start: 'top 50%'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    
}