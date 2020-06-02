// Your code goes here
const navAnchor = document.querySelectorAll('.nav a');
const headImg = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');


navAnchor.forEach(item =>{
    item.addEventListener('mouseover', (event) =>{
        event.target.style.color = 'green';
    }) 
})



// function headImgEscDown(event){
//     if(event.key === 'Escape'){
//         debugger
//         headImg.setAttribute('src', 'https://images.unsplash.com/photo-1483721168571-c0895f4432c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1987&q=80')   
//     }
// }

// headImg.addEventListener('keydown', headImgEscDown)

function mouseEnterP(event){
    debugger
    event.target.style.backgroundColor = 'red';
    event.target.style.border = '2px solid black';
    event.target.style.color = 'white';
    event.target.style.textAlign = 'center';
}

introP.addEventListener('mouseenter', mouseEnterP)

