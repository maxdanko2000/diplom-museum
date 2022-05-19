import Swiper from "swiper";
import { heroOptions } from "./includes/hero-slider.js";
import { Comparison } from "./includes/explore-comparison";
import { journeyOptions } from "./includes/journey-video-slider.js";

import "./includes/form-droplist.js";

new Comparison().comparing();
new Swiper(".hero-slider", Object.assign(heroOptions));
new Swiper(".journey-slider-inner", Object.assign(journeyOptions));
