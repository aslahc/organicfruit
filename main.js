const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
document.getElementById("but1").addEventListener("click", function() {
  
  this.textContent = "Added";
});

document.getElementById("but2").addEventListener("click", function() {
  
  this.textContent = "Added";
});

document.getElementById("but3").addEventListener("click", function() {
  
  this.textContent = "Added";
});
AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
 

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const colorSwitchButton = document.getElementById("color-switch");
const body = document.body;

colorSwitchButton.addEventListener("click", function () {
  // Toggle the 'alt' class on the body element to switch between color schemes
  body.classList.toggle("alt");


  
});


