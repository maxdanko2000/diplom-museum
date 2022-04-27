const divisor = document.querySelector(".explore__comparison-img-after");
const comparisonWidth = document.querySelector(".explore__comparison").clientWidth;
const comparison = document.querySelector(".explore__comparison");

comparison.addEventListener("mousemove", (e) => {
    divisor.style.width = (e.offsetX * 100 / comparisonWidth) + "%";
})
