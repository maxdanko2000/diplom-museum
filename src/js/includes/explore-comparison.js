export class Comparison {
  constructor() {
    this.comparing();
  }
  comparing() {
    const divisor = document.querySelector(".explore__comparison-divisor");
    divisor.addEventListener("input", () => {
      let slideValue = document.querySelector(".explore__comparison-divisor").value;
      const afterImg = (document.querySelector(
        ".explore__comparison-after"
      ).style.clipPath = `polygon(0 0,${slideValue}% 0, ${slideValue}% 100%, 0 100%`);
      return afterImg;
    });
  }
}
