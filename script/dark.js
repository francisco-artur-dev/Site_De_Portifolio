//const dark = document.querySelectorAll(".dark-mode")
const btn = document.getElementById("modo")
const body = document.body
const cont= document.querySelector(".containner")
/*
btn.addEventListener('click', () => {

    body.classList.toggle('dark');
    body.classList.toggle('light');
    
});

*/
function modo(){
       cont.classList.toggle("dark") ;
    
}
