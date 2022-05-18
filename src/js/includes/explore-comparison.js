const afterImg = document.querySelector(".explore__comparison-after");
export class Comparison {
  constructor() {}
  compare() {
    return () => {
      let slideValue = document.querySelector(".explore__comparison-divisor").value;
      afterImg.style.clipPath = `polygon(0 0,${slideValue}% 0, ${slideValue}% 100%, 0 100%`;
    };
  }
}
// function compare() {}
