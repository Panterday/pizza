import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animationsForPromociones = ()=>{

    gsap.from('#promociones h4',{
        scrollTrigger: {
            trigger: '#promociones h4',
            start: 'top 70%'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#sect1',{
        scrollTrigger: {
            trigger: '#sect1',
            start: 'top 70%'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#sect2',{
        scrollTrigger: {
            trigger: '#sect2',
            start: 'top 70%'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#sect3',{
        scrollTrigger: {
            trigger: '#sect3',
            start: 'top 70%'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#sect4',{
        scrollTrigger: {
            trigger: '#sect4',
            start: 'top 70%'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#sect5',{
        scrollTrigger: {
            trigger: '#sect5',
            start: 'top 70%'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    
}