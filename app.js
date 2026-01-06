//Mascota
const mascota = document.querySelector(".mascota");
const hoverSection = document.querySelector(".hover-section");

hoverSection.addEventListener("mouseenter", () => {
    mascota.style.opacity = "10";
    mascota.style.bottom = "35px";
    mascota.style.right = "40px";
});

hoverSection.addEventListener("mouseleave", () => {
    mascota.style.opacity = "0";
    mascota.style.bottom = "-100px";
    mascota.style.right = "-100px";
});
//ButtonText
const revealBtn = document.querySelector(".reveal");
const hiddenContent = document.getElementsByClassName("hidden-content");

function revealContent() {
    for (let i = 0; i < hiddenContent.length; i++) {
        if (hiddenContent[i].classList.contains("reveal")) {
            hiddenContent[i].classList.remove("reveal");
            revealBtn.innerText = 'Show more'
        } else {
            hiddenContent[i].classList.add("reveal");
            revealBtn.innerText = 'Show less'
        }
    }
}

revealBtn.addEventListener("click", revealContent);
