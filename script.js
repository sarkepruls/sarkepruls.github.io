const quoteSatu = document.querySelector(".quoteSatu");
const quoteDua = document.querySelector(".quoteDua");
const quoteTiga = document.querySelector(".quoteTiga");
const line = document.querySelector(".line");
const author = document.querySelector(".author");
let index = 0;
const stringSatu = "Jika kamu digosipkan, berarti kamu populer.";
const stringDua = "Jika kamu direndahkan, berarti kamu lebih tinggi.";
const stringTiga = "Jika kamu dimusuhi, berarti kamu adalah lawan yang tangguh.";

function animateText(string, element, callback) {
    element.style.display = 'block';

    function animateCharacter() {
        if (index < string.length) {
            element.textContent += string[index];
            index++;
            setTimeout(animateCharacter, 50);
        } else {
            index = 0;
            callback();
        }
    }
    animateCharacter();
}

function tampil2(callback) {
    line.classList.add("show");
    line.addEventListener("transitionend", callback, { once: true });
}

function tampil3(callback) {
    author.classList.add("show");
    author.addEventListener("transitionend", callback, { once: true });
}

function xxx() {
    quoteSatu.style.opacity = '0';
    quoteSatu.style.transition = '10s ease-out';

    quoteDua.style.opacity = '0';
    quoteDua.style.transition = '10s ease-out';

    quoteTiga.style.opacity = '0';
    quoteTiga.style.transition = '10s ease-out';

    line.style.opacity = '0';
    line.style.transition = '10s ease-out';

    author.style.opacity = '0';
    author.style.transition = '10s ease-out';
}

animateText(stringSatu, quoteSatu, function () {
    animateText(stringDua, quoteDua, function () {
        animateText(stringTiga, quoteTiga, function () {
            tampil2(function () {
                tampil3(function () {
                    xxx();
                });
            });
        });
    });
});