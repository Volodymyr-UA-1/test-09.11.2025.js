const color = document.querySelector(".color");
const btn = document.querySelector(".handleClick");

let isToggle = false;
let intervalId = null;


btn.addEventListener('click', (e) =>{
   e.target.className;
isToggle = !isToggle;
if(isToggle === true){
     intervalId = setInterval(toggleColor,1000);
    color.style.background ='rgb(206, 10, 17)';
     btn.textContent = "Off";

}
else{
    clearInterval(intervalId);
    btn.textContent = "On";
    color.style.background ='#fff';
    hideColor();
}
})
//function blink
function toggleColor(){
    const changeColor = document.querySelector(".color");
    changeColor.classList.toggle("is-hidden");
}


function hideColor(){
    const changeColor = document.querySelector(".color");
    changeColor.classList.remove("is-hidden");   
}