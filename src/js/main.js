import pizza from '../assets/pizza.png'
import mrMaxImg from '../assets/logox1.png'

export const main = ()=>{
    const img = document.querySelector('main section img');

    const mrMax = document.querySelector('main article img')

    img.src = pizza;
    mrMax.src = mrMaxImg;  
}