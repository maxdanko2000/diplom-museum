export class Comparison {
  constructor() {
    this.divisor = document.querySelector(".explore__comparison-divisor");
    this.afterImg = document.querySelector(".explore__comparison-after");
  }

  comparing() {
    this.divisor.addEventListener("input", () => {
      let slideValue = this.divisor.value;
      this.afterImg.style.clipPath = `polygon(0 0,${slideValue}% 0, ${slideValue}% 100%, 0 100%`;
      return this.afterImg;
    });
  }
}
