import Swiper from "swiper";
import { heroOptions } from "./includes/hero-slider.js";
import { Comparison } from "./includes/explore-comparison";
import { journeyOptions } from "./includes/journey-video-slider.js";
import { JourneyVideo } from "./includes/journey-video-player.js";
import { Form } from "./includes/form.js";
import { User } from "./includes/user.js";
import { Register } from "./includes/register.js";
import { Login } from "./includes/login.js";
import { Admin } from "./includes/admin.js";
import { render } from "./includes/render.js";

if (document.location.pathname === "/" || document.location.pathname === "/index.html") {
  //Explore
  render();
  new Comparison().comparing();
  //Hero
  new Swiper(".hero-slider", Object.assign(heroOptions));
  //Journey Video
  new JourneyVideo().initVideo();
  new JourneyVideo().toggleVideo();
  new JourneyVideo().toggleVolume();
  new JourneyVideo().moveVolumeThumb();
  new JourneyVideo().videoChangeTime();
  new JourneyVideo().toggleFullScreen();
  new JourneyVideo().progressLoop();
  new Swiper(".journey-slider-inner", Object.assign(journeyOptions));
  //Tickets form
  new Form().buyTicket();
  new Form().toggleForm();
  new Form().increase();
  new Form().decrease();
  new Form().selectValue();
}

if (document.location.pathname === "/user-page.html") {
  render();
  new User().loadData();
  new User().imagePreview();
  new User().returnTicket();
  new User().userLogOut();
  new User().deleteAccount();
}

if (document.location.pathname === "/admin-page.html") {
  render();
  new Admin().init();
  new Admin().updateData();
  new Admin().addDate();
  new Admin().addTime();
  new Admin().removeDate();
  new Admin().removeTime();
  new Admin().removeUser();
  new Admin().updatePrice();
  new Admin().adminLogOut();
}

if (document.location.pathname === "/register-page.html") {
  render();
  new Register().register();
}

if (document.location.pathname === "/login-page.html") {
  render();
  new Login().authorize();
}
