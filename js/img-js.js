const imgs = document.querySelectorAll(".img-js");
let status = true;

function rotateFunc() {
    imgs.forEach(img => {
        if (img.classList.contains("rotateRight")) {
            img.classList.remove("rotateRight")
            img.classList.add("rotateLeft");
        } else {
            img.classList.remove("rotateLeft")
            img.classList.add("rotateRight");
        }
    });
}

setInterval(rotateFunc, 4000);
