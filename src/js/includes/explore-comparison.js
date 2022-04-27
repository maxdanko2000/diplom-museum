const divisor = document.querySelector(".explore__comparison-img-after");
const comparison = document.querySelector(".explore__comparison");
const comparisonWidth = comparison.clientWidth;

comparison.addEventListener("mousemove", (e) => {
    divisor.style.width = (e.offsetX * 100 / comparisonWidth) + "%";
})
