// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
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
        centeredSlides: true,
        spaceBetween: 100,
    });
}
imageHover();
swiperAnimation();