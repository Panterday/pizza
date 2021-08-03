import pizza from '../assets/pizza_2.png'
import mrMaxImg from '../assets/logox1.png'

export const main = ()=>{

    const mrMax = document.querySelector('main article img')
    const imgPizza = document.querySelector('main section img')
    const btnOrdena = document.querySelector('main div:nth-child(1) button')
    const divOrdena = document.querySelector('main div:nth-child(1)')
    const btnMain = document.querySelector('#saludo button')

    mrMax.src = mrMaxImg;
    imgPizza.src = pizza;

    btnMain.addEventListener('click', ()=>{
        if(divOrdena.style.display === '' || divOrdena.style.display === 'none'){
            divOrdena.style.display = 'flex';
        }else{
            divOrdena.style.display = 'none';
        }
    })
    
    btnOrdena.addEventListener('click', ()=>{
        if(divOrdena.style.display === '' || divOrdena.style.display === 'none'){
            divOrdena.style.display = 'flex';
        }else{
            divOrdena.style.display = 'none';
        }
    })
}