// const clock =document.getElementsByClassName('clock');
const clock=document.querySelector('.clock');

// let date=new Date();
// console.log(date.toLocaleTimeString());
// clock.innerHTML =date.toLocaleTimeString();

setInterval(function(){
    let date=new Date();
    clock.innerHTML =date.toLocaleTimeString();
    clock.style.color="red";
    clock.style.fontSize="2rem"

}, 1000);