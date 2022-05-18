// import "./includes/explore-comparison.js";
// import "./includes/journey-video-slider.js";
// import "./includes/hero-slider.js";
import { Comparison } from "./includes/explore-comparison.js";

const divisor = document.querySelector(".explore__comparison-divisor");
const comparison = new Comparison();
divisor.addEventListener("input", comparison.compare());
