import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animationsForEspecialidades = ()=>{
    gsap.from('#especialidades h4',{
        scrollTrigger: {
            trigger: '#especialidades h4',
            start: 'top 70%'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#espeSect1',{
        scrollTrigger: {
            trigger: '#espeSect1',
            start: 'top 70%'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#espeSect2',{
        scrollTrigger: {
            trigger: '#espeSect2',
            start: 'top 70%'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#espeSect3',{
        scrollTrigger: {
            trigger: '#espeSect3',
            start: 'top 70%'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })

    gsap.from('#espeSect4',{
        scrollTrigger: {
            trigger: '#espeSect4',
            start: 'top 70%'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'Power2.easeOut'
    })
}