import pizza from '../assets/pizza_2.png'
import mrMaxImg from '../assets/logox1.png'
import promo1 from '../assets/promo1.jpg'
import especial1 from '../assets/especialidad1.jpg'
import whatsappLogo from '../assets/whatsapp.svg'
import telLogo from '../assets/telefono.svg'
import mapaLogo from '../assets/mapa.svg'
import atrasLogo from '../assets/atras.svg'

export const main = ()=>{

    const mrMax = document.querySelector('#mr-max-logo')
    const imgPizza = document.querySelector('#pizza-inicio')

    const imgPromos = document.querySelectorAll('#promociones section img')
    const imgEspecial = document.querySelectorAll('#especialidades section img')

    const imgLogo = document.querySelector('#whatsapp-logo')
    const imgTelLogo = document.querySelector('#telefono-logo')
    const imgMapaLogo = document.querySelector('#mapa-logo')
    const imgAtrasLogo = document.querySelector('#volver-logo')

    mrMax.src = mrMaxImg;
    imgPizza.src = pizza;
    imgPromos[0].src = promo1;
    imgPromos[1].src = promo1;
    imgPromos[2].src = promo1;
    imgPromos[3].src = promo1;
    imgPromos[4].src = promo1; 

    imgEspecial[0].src = especial1;
    imgEspecial[1].src = especial1;
    imgEspecial[2].src = especial1;
    imgEspecial[3].src = especial1;

    imgLogo.src = whatsappLogo;
    imgTelLogo.src = telLogo;
    imgMapaLogo.src = mapaLogo;
    imgAtrasLogo.src = atrasLogo;    

}