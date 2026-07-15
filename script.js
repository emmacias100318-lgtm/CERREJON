/*=========================================
CERREJÓN
script.js
=========================================*/

// ==============================
// ELEMENTOS
// ==============================

const header = document.getElementById("header");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const topBtn = document.getElementById("topBtn");

// ==============================
// MENÚ HAMBURGUESA
// ==============================

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ==============================
// CERRAR MENÚ AL SELECCIONAR
// ==============================

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

// ==============================
// HEADER AL HACER SCROLL
// ==============================

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});

// ==============================
// BOTÓN SUBIR
// ==============================

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==============================
// ANIMACIONES
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade");

        }

    });

},{

    threshold:.2

});

document.querySelectorAll(".section").forEach(section=>{

    observer.observe(section);

});

// ==============================
// EFECTO HOVER EN GALERÍA
// ==============================

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="brightness(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter="brightness(1)";

    });

});

// ==============================
// EFECTO PARALLAX HERO
// ==============================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.backgroundPositionY=(window.pageYOffset*0.5)+"px";

});

// ==============================
// EFECTO EN BOTONES
// ==============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-6px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

// ==============================
// AÑO AUTOMÁTICO EN FOOTER
// ==============================

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.querySelectorAll("p")[1].innerHTML =
`© ${year} Cerrejón - Página desarrollada con HTML5, CSS3 y JavaScript.`;

// ==============================
// MENSAJE EN CONSOLA
// ==============================

console.log("%cCERREJÓN","font-size:30px;color:#0B5E3B;font-weight:bold;");

console.log("Proyecto desarrollado en HTML5, CSS3 y JavaScript.");