const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const imageHover = () => {
    const elemContainer = document.querySelector("#elem-container");
    const fixedImg = document.querySelector(".fixed-image");
    const elem = document.querySelectorAll(".elem");
    elem.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            let imageUrl = item.getAttribute("data-image")
            fixedImg.style.display = "block"
            fixedImg.style.backgroundImage = `url(${imageUrl})`

        });
    })
    elemContainer.addEventListener("mouseleave", () => {
        fixedImg.style.display = "none"
    })
}

const swiperAnimation = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 100,
        autoplay: window.innerWidth <= 768 ? {
            delay: 3000,
            disableOnInteraction: false,
        } : true,
        breakpoints: {
            600: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 3,
                // centeredSlides: true,
                spaceBetween: 70,
            },
        }
    });
}
const menuToggler = () => {
    const navImage = document.querySelector("nav img");
    const menu = document.querySelector(".hamburger-wrapper");
    const fullScr = document.querySelector("#full-scr");
    let flag = true;
    menu.addEventListener("click", () => {
        if (flag) {
            navImage.style.opacity = "0";
            fullScr.style.top = "0";
            // fullScr.style.top = "-5";
            flag = !flag;
        } else {
            navImage.style.opacity = "1";
            // fullScr.style.top = "-108%";
            fullScr.style.top = "-110%";
            flag = !flag;
        }
    })
}
const hamburgerMenu = () => {
    const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
    hamburgerWrapper.addEventListener("click", () => {
        const hamburger = document.querySelectorAll(".hamburger");
        hamburger.forEach((e) => {
            e.classList.toggle("active")
        })
    })
}
const initialLoader = () => {
    const loader = document.querySelector("#loader");
    setTimeout(() => {
        loader.style.top = "-100%";
    }, 4200);
}
document.querySelector("form", addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("yes");

}))
 document.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
})

const year = document.querySelector("#current-year");
year.innerHTML = new Date().getFullYear();

imageHover();
swiperAnimation();
menuToggler();
hamburgerMenu();
initialLoader();