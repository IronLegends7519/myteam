const BtnAden = document.querySelector("#aden")
const BtnDescriptionAden = document.querySelector("#adenDescription")
const ProfilAden = document.querySelector("#profilAden")
const DescriptionAden = document.querySelector("#descriptionAden")
let a = 1

BtnAden.addEventListener('click',aden)
BtnDescriptionAden.addEventListener('click',aden)

function aden(){
    a++
    if(a%2 === 0){    
        ProfilAden.style.display = 'none';
    DescriptionAden.style.display = 'block';
}
else{
    ProfilAden.style.display = 'block';
    DescriptionAden.style.display = 'none';
}
}

const BtnGriffin = document.querySelector("#griffin")
const BtnDescriptionGriffin = document.querySelector("#griffinDescription")
const ProfilGriffin = document.querySelector("#profilGriffin")
const DescriptionGriffin = document.querySelector("#descriptionGriffin")
let b = 1

BtnGriffin.addEventListener('click',griffin)
BtnDescriptionGriffin.addEventListener('click',griffin)

function griffin(){
    b++
    if(b%2 === 0){    
        ProfilGriffin.style.display = 'none';
    DescriptionGriffin.style.display = 'block';
}
else{
    ProfilGriffin.style.display = 'block';
    DescriptionGriffin.style.display = 'none';
}
}


const BtnDrake = document.querySelector("#drake")
const BtnDescriptionDrake = document.querySelector("#drakeDescription")
const ProfilDrake = document.querySelector("#profilDrake")
const DescriptionDrake = document.querySelector("#descriptionDrake")
let c = 1

BtnDrake.addEventListener('click',drake)
BtnDescriptionDrake.addEventListener('click',drake)

function drake(){
    c++
    if(c%2 === 0){    
        ProfilDrake.style.display = 'none';
    DescriptionDrake.style.display = 'block';
}
else{
    ProfilDrake.style.display = 'block';
    DescriptionDrake.style.display = 'none';
}
}


const BtnCruz = document.querySelector("#cruz")
const BtnDescriptionCruz = document.querySelector("#cruzDescription")
const ProfilCruz = document.querySelector("#profilCruz")
const DescriptionCruz = document.querySelector("#descriptionCruz")
let d = 1

BtnCruz.addEventListener('click',cruz)
BtnDescriptionCruz.addEventListener('click',cruz)

function cruz(){
    d++
    if(d%2 === 0){    
        ProfilCruz.style.display = 'none';
    DescriptionCruz.style.display = 'block';
}
else{
    ProfilCruz.style.display = 'block';
    DescriptionCruz.style.display = 'none';
}
}


const BtnCristian = document.querySelector("#cristian")
const BtnDescriptionCristian = document.querySelector("#cristianDescription")
const ProfilCristian = document.querySelector("#profilCristian")
const DescriptionCristian = document.querySelector("#descriptionCristian")
let e = 1

BtnCristian.addEventListener('click',cristian)
BtnDescriptionCristian.addEventListener('click',cristian)

function cristian(){
    e++
    if(e%2 === 0){    
        ProfilCristian.style.display = 'none';
    DescriptionCristian.style.display = 'block';
}
else{
    ProfilCristian.style.display = 'block';
    DescriptionCristian.style.display = 'none';
}
}


const BtnNikita = document.querySelector("#nikita")
const BtnDescriptionNikita = document.querySelector("#nikitaDescription")
const ProfilNikita = document.querySelector("#profilNikita")
const DescriptionNikita = document.querySelector("#descriptionNikita")
let f = 1

BtnNikita.addEventListener('click',nikita)
BtnDescriptionNikita.addEventListener('click',nikita)

function nikita(){
    f++
    if(f%2 === 0){    
        ProfilNikita.style.display = 'none';
    DescriptionNikita.style.display = 'block';
}
else{
    ProfilNikita.style.display = 'block';
    DescriptionNikita.style.display = 'none';
}
}
