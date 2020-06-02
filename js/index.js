// Your code goes here
const navAnchor = document.querySelectorAll('.nav a');
const introImg = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');
//---------------------------------------------------------------------------------------


navAnchor.forEach(item =>{
    item.addEventListener('mouseover', (event) =>{
        event.target.style.color = 'green';
    }) 
})
//---------------------------------------------------------------------------------------

function mouseEnterP(event){
    event.target.style.backgroundColor = 'red';
    event.target.style.border = '2px solid black';
    event.target.style.color = 'white';
    event.target.style.textAlign = 'center';
}

introP.addEventListener('mouseenter', mouseEnterP)
//---------------------------------------------------------------------------------------

function mouseExitP(event){
    event.target.style.backgroundColor = '';
    event.target.style.border = '';
    event.target.style.color = '';
    event.target.style.textAlign = '';
}

introP.addEventListener('mouseleave', mouseExitP)
//---------------------------------------------------------------------------------------

function introEscDown(event){
    if(event.key === 'Escape'){
        introImg.setAttribute('src', 'https://images.unsplash.com/photo-1483721168571-c0895f4432c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1987&q=80')   
    }
}

document.addEventListener('keydown', introEscDown)
//---------------------------------------------------------------------------------------

function introEscUp(event){
    if(event.key === 'Escape'){
        introImg.setAttribute('src', 'img/fun-bus.jpg')   
    }
}

document.addEventListener('keyup', introEscUp)

//----------------------------------------------------------------------------------------
function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.8, scale), 1.2);

    introImg.style.transform = `scale(${scale})`
}

let scale = 1;

introImg.addEventListener('wheel',zoom)