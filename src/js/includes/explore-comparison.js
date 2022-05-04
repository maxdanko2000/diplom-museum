const divisor = document.querySelector(".explore__comparison-divisor");

function comparing() {
    let slideValue = document.querySelector(".explore__comparison-divisor").value;
    document.querySelector(".explore__comparison-after").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
    console.log(slideValue);
}



divisor.addEventListener("input", comparing);
