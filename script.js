// //every time a particular key is pressed, i intend to turn the display 
// //property of each slide to flex, from none

// const slides = document.querySelectorAll('.slide');
// let slideNum = 0;

// function present() {
//     slides.forEach((slide, index) => {
//         if (index === slideNum) {
//             slide.style.display = "flex";
//         } else {
//             slide.style.display = "none";
//         }
//     });
// }

// // Initialize the presentation with the first slide
// present();

// // Listen for the up arrow key press
// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowUp") {
//         // Move to the next slide (or wrap to the first slide)
//         slideNum = (slideNum + 1) % slides.length;
//         present();
//     }
//     if (event.key === "ArrowDown") {
//         // Move to the next slide (or wrap to the first slide)
//         slideNum = (slideNum - 1) % slides.length;
//         present();
//     }
// });

// // You can also implement similar logic for the down arrow key to move to the previous slide.
