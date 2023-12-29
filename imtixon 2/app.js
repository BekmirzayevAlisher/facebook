const navbaritem2 = document.querySelector(".navbar-item2");
const navbaritem3 = document.querySelector(".navbar-item3");
const navbaritem4 = document.querySelector(".navbar-item4");
const navbaritem5 = document.querySelector(".navbar-item5");
const navbaritem6 = document.querySelector(".navbar-item6");
const navbaritem7 = document.querySelector(".navbar-item7");
const navbaritem8 = document.querySelector(".navbar-item8");
const navbaritem9 = document.querySelector(".navbar-item9");
const i7 = document.querySelector("#i7");
const i = document.querySelector("#i");
const i1 = document.querySelector("#i1");
const i2 = document.querySelector("#i2");
const i3= document.querySelector("#i3");
const i4 = document.querySelector("#i4");
const i5 = document.querySelector("#i5");
const i6 = document.querySelector("#i6");

const container = document.querySelector(".container");

const uy = document.querySelector("#uy");
const tilvizor = document.querySelector("#tilvizor");
const odam = document.querySelector("#odam");
const qongiroq = document.querySelector("#qongiroq");
const bars = document.querySelector("#bars");

const input = document.querySelector(".input");
const news = document.querySelector(".news");
const videolar = document.querySelector(".videolar");

const uchta = document.querySelector(".uchta");
const odamlar = document.querySelector(".odamlar");
const xabarlar = document.querySelector(".xabarlar");

const back = document.querySelector("#back");
const serch = document.querySelector(".serch");
const srch = document.querySelector(".srch");

const qdr = document.querySelector("#qdr");
const qdr2 = document.querySelector(".qdr2");
const galareya = document.querySelector(".galareya");
const ex = document.querySelector("#ex");
const gta = document.querySelector("#gta");


tilvizor.addEventListener("click", () =>{
     news.style.display = "none";
     videolar.style = "display:block;"
    uchta.style.display = "none";
    tilvizor.style = "color:rgb(25, 119, 220);"
    uy.style = "  color:white"
    bars.style = "  color:white"
    odamlar.style.display = "none";
    odam.style = "  color:white"
    qongiroq.style = "  color:white"
    xabarlar.style.display = "none";



})

uy.addEventListener("click", () =>{
    news.style.display = "block";
    videolar.style.display = "none"
    uchta.style.display = "none";
    uy.style = "color:rgb(25, 119, 220);"
    tilvizor.style = "  color:white"
    bars.style = "  color:white"
    odamlar.style.display = "none";
    odam.style = "  color:white"
    qongiroq.style = "  color:white"
    xabarlar.style.display = "none";
})
bars.addEventListener("click", () =>{
    news.style.display = "none";
    videolar.style.display = "none";
    uchta.style.display = "block";
    bars.style = "color:rgb(25, 119, 220)"
    uy.style = "  color:white"
    tilvizor.style = "  color:white"
    odamlar.style.display = "none";
    odam.style = "  color:white"
    qongiroq.style = "  color:white"
    xabarlar.style.display = "none";



})
odam.addEventListener("click",() =>{
    odamlar.style.display ="block";
    news.style.display = "none";
    videolar.style.display = "none";
    uchta.style.display = "none";
    odam.style = "color:rgb(25, 119, 220);"
    uy.style = "  color:white"
    bars.style = " color:white"
    qongiroq.style = "color:white"
    tilvizor.style = "color:white"
    xabarlar.style.display = "none";
})
qongiroq.addEventListener("click",() =>{
    odamlar.style.display = "none";
    odam.style.color = "white";
    xabarlar.style.display ="block";
    news.style.display = "none";
    videolar.style.display = "none";
    uchta.style.display = "none";
    qongiroq.style = "color:rgb(25, 119, 220);"
    uy.style = "  color:white"
    bars.style = "  color:white"
    tilvizor.style = "  color:white"
})

back.addEventListener("click", () =>{
    serch.style.display = "none";
    container.style = 'display:block'
})

srch.addEventListener("click", () =>{
    serch.style.display = "block";
    container.style = 'display:none'
})

qdr.addEventListener("click", () =>{
    serch.style.display = "block";
    container.style = 'display:none'
})

qdr2.addEventListener("click", () =>{
    serch.style.display = "block";
    container.style = 'display:none'
})
gta.addEventListener("click", () =>{
    galareya.style.display = "block";
    container.style = 'display:none'
   
})
ex.addEventListener("click", () =>{
    galareya.style.display = "none";
    container.style = 'display:block'
   
})



///////////////////////////////////////////////////////////////////////////////////////////
i.addEventListener("click",() =>{
    navbaritem2.style.display = "";
})
i1.addEventListener("click",() =>{
    navbaritem3.style.display = "none";
})
i2.addEventListener("click",() =>{
    navbaritem4.style.display = "none";
})
i3.addEventListener("click",() =>{
    navbaritem5.style.display = "none";
})
i4.addEventListener("click",() =>{
    navbaritem6.style.display = "none";
})
i5.addEventListener("click",() =>{
    navbaritem7.style.display = "none";
})
i6.addEventListener("click",() =>{
    navbaritem8.style.display = "none";
})
i7.addEventListener("click",() =>{
    navbaritem9.style.display = "none";
})
const tashlashman = document.querySelector(".tashlashman");
const tashlash3333 = document.querySelector(".tashlash3333");
const tashlashha = document.querySelector(".tashlashha");
const tashlash33 = document.querySelector(".tashlash33");
const tashlash5 = document.querySelector(".tashlash5");
const tashlashpl = document.querySelector(".tashlashpl");
const tashlash3 = document.querySelector(".tashlash3");
const tashlash567 = document.querySelector(".tashlash567");
const tashlash1 = document.querySelector(".tashlash1");
const tashlash = document.querySelector(".tashlash");                                                                                                                         
tashlash3.addEventListener("click",() =>{
   tashlash .style.display = "none";
})

tashlashha.addEventListener("click",() =>{
tashlash1.style.display = "none";
})

tashlash33.addEventListener("click",() =>{
    tashlash5.style.display = "none";
})

tashlashman.addEventListener("click",() =>{
    tashlashpl.style.display = "none";
})

tashlash3333.addEventListener("click",() =>{
    tashlash567.style.display = "none";
})

tashlash6.addEventListener("click",() =>{
    dos6.style.display = "none";
})

tashlash7.addEventListener("click",() =>{
    dos7.style.display = "none";
})

tashlash8.addEventListener("click",() =>{
    dos8.style.display = "none";
})

tashlash9.addEventListener("click",() =>{
    dos9.style.display = "none";
})