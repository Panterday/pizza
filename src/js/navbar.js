import name from '../assets/namex1.png'

export const navbar = ()=>{
    const img = document.querySelector('header img');
    const btnLogo = document.querySelector('header span'); 

    img.src = name;
    btnLogo.addEventListener('click', ()=>{
        console.log('entré');
        if(document.querySelector('nav').style.display === '' || document.querySelector('nav').style.display === 'none'){
            document.querySelector('nav').style.display = 'flex';
        }else{
            document.querySelector('nav').style.display = 'none';
        }
    })
}