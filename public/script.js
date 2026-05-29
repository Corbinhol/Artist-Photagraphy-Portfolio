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

document.getElementById("image-upload-label").addEventListener("drop", (e) => {
    console.log("Dropped Image");
    e.preventDefault();
    document.getElementById("image-upload").files = e.dataTransfer.files;
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById("img-upload-preview").src = e.target.result;
        document.getElementById("img-upload-preview").classList.remove("hidden");
        document.getElementById("label-text").classList.add("hidden");
    }
    reader.readAsDataURL(file);
});

document.getElementById("image-upload-label").addEventListener("dragover", (e) => {
    console.log("Dragged Image");
    e.preventDefault();
});

document.getElementById("image-upload").addEventListener("change", (e) => {
    console.log("Uploaded Image");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById("img-upload-preview").src = e.target.result;
        document.getElementById("img-upload-preview").classList.remove("hidden");
        document.getElementById("label-text").classList.add("hidden");
    };
    reader.readAsDataURL(file);
});

document.getElementById("admin-upload-panel-button").addEventListener("click", () => {
    document.getElementById("admin-upload-panel").classList.remove("hidden");
    document.getElementById("admin-upload-background").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("admin-upload-panel").classList.add("visible");
        document.getElementById("admin-upload-background").classList.add("kinda-visible");
    }, 5);
});

document.getElementById("admin-upload-cancel-button").addEventListener("click", () => {
    document.getElementById("admin-upload-panel").classList.remove("visible");
    document.getElementById("admin-upload-background").classList.remove("kinda-visible");
    setTimeout(() => {
        document.getElementById("admin-upload-panel").classList.add("hidden");
        document.getElementById("admin-upload-background").classList.add("hidden");
    }, 400);
});