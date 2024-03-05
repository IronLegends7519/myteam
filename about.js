const Btn = document.querySelectorAll(".btnJS")
const btnDescription = document.querySelectorAll(".btnJSNone")
const profil = document.querySelectorAll(".profilJs")
const description = document.querySelectorAll(".profilJsNone")
let compteur = 1

for(let i = 0;i<=6;i++){
    Btn[i].addEventListener('click',fonctionBtn)
    btnDescription[i].addEventListener('click',fonctionBtn)
    
    function fonctionBtn(){
        compteur++
        if(compteur%2 === 0){    
            profil[i].style.display = 'none';
        description[i].style.display = 'block';
    }
    else{
        profil[i].style.display = 'block';
        description[i].style.display = 'none';
    }
    }
}


