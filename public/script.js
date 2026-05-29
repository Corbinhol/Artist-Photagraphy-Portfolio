let images = document.querySelectorAll(".image");

images.forEach((image) => {
    image.addEventListener("click", () => {
        document.body.classList.add("locked");
        document.querySelector("main").classList.add("locked");
        document.querySelector(".image-overlay-back").classList.add("active");
        document.querySelector(".image-overlay").classList.add("active");
        document.getElementById("preview-img").src = image.querySelector("img").src;
        document.querySelector(".image-preview-dialogue").classList.remove("hidden");
        setTimeout(() => {
           document.querySelector(".image-overlay-back").classList.add("kinda-visible");
           document.querySelector(".image-overlay").classList.add("visible"); 
        }, 0);
    });
});

document.getElementById("preview-close").addEventListener("click", () => {
    document.querySelector(".image-overlay-back").classList.remove("kinda-visible");
    document.querySelector(".image-overlay").classList.remove("visible");
    
    setTimeout(() => {
        document.querySelector(".image-preview-dialogue").classList.add("hidden");
        document.body.classList.remove("locked");
        document.querySelector("main").classList.remove("locked");
        document.querySelector(".image-overlay-back").classList.remove("active");
        document.querySelector(".image-overlay").classList.remove("active");
    }, 400);
});