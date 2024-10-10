document.addEventListener("DOMContentLoaded",()=>{

const menu = document.getElementById("menu")
const btn1 = document.querySelector("header button")
const li = document.querySelectorAll("#menu ul li a")

let i = 0
const move = () =>{
    if(i === 0)
    {menu.style.height = "70vh";
    btn1.textContent = "close"
    i++;}
    else{
        menu.style.height = 0;
        btn1.textContent = "menu";
        i = 0;
    }

}


btn1.addEventListener("click", move)



li.forEach(i =>{
    i.addEventListener("click",() =>{
        menu.style.height = 0;
        btn1.textContent = "menu";
        i = 0;

    })

})


})//end of script