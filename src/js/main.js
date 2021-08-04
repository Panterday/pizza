import pizza from '../assets/pizza_2.png'
import mrMaxImg from '../assets/logox1.png'
import promo1 from '../assets/promo1.jpg'
import especial1 from '../assets/especialidad1.jpg'

export const main = ()=>{

    const mrMax = document.querySelector('main article img')
    const imgPizza = document.querySelector('main section img')

    const imgPromos = document.querySelectorAll('#promociones section img')
    const imgEspecial = document.querySelectorAll('#especialidades section img')

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

}