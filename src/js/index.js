import Swiper from "swiper";
import { heroOptions } from "./includes/hero-slider.js";
import { Comparison } from "./includes/explore-comparison";
import { journeyOptions } from "./includes/journey-video-slider.js";
import { JourneyVideo } from "./includes/journey-video.js";
import { Form } from "./includes/form.js";
import { User } from "./includes/user.js";

//Explore
new Comparison().comparing();
//Hero
new Swiper(".hero-slider", Object.assign(heroOptions));
//Journey Video
new JourneyVideo().initVideo();
new JourneyVideo().startStopVideo();
new JourneyVideo().toggleVolume();
new JourneyVideo().moveVolumeThumb();
new JourneyVideo().videoChangeTime();
new JourneyVideo().toggleFullScreen();
new JourneyVideo().progressLoop();
new Swiper(".journey-slider-inner", Object.assign(journeyOptions));
//Tickets form
new Form().increase();
new Form().decrease();
new Form().selectValue();
//User
new User().imagePreview();
