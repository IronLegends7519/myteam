const BtnBurger = document.querySelector("#burger")
const BtnClose = document.querySelector("#close")
const Menu = document.querySelector("#menu")
const Body = document.querySelector("#body")
const Header = document.querySelector("#header")
const fond = document.querySelector(".fond")
let g = 1 

BtnBurger.addEventListener("click",menuBurger)
BtnClose.addEventListener("click",menuBurger)
function menuBurger(){
    g++
    if(g%2 === 0){
        Menu.style.display ='flex';
        fond.style.display="block"
    }
    else{
        Menu.style.display='none';
        fond.style.display='none';
    }
}