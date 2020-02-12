// JS Goes here - ES6 supported

import "./css/main.css";
import ScrollReveal from "scrollreveal";

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ScrollReveal().reveal(".reveal", { interval: 400 });
ScrollReveal().reveal(".section-heading", { orign: "left", distance: "20px" });
ScrollReveal().reveal(".reveal-credit", { interval: 100 });

ready(() => {
  const $menuButton = document.querySelector("#menu-button");
  const $menu = document.querySelector("#menu");
  $menuButton.addEventListener("click", () => {
    $menu.classList.toggle("dn-important");
  });
  $menu.addEventListener("click", () => {
    $menu.classList.toggle("dn-important");
  });
});
