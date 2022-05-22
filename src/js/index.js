import Swiper from "swiper";
import { heroOptions } from "./includes/hero-slider.js";
import { Comparison } from "./includes/explore-comparison";
import { journeyOptions } from "./includes/journey-video-slider.js";
import "./includes/form-func.js";
// import { Form } from "./includes/form-class.js";

import "./includes/form.js";

new Comparison().comparing();
new Swiper(".hero-slider", Object.assign(heroOptions));
new Swiper(".journey-slider-inner", Object.assign(journeyOptions));
// new Form().toggleForm();
// new Form().increaseValue();
