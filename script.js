let circle = document.querySelector(".circle");
let btn = document.querySelector(".btn");
let inner = document.querySelector(".inner-container");
let innertext = document.querySelector(".inner-text");
window.addEventListener("mousemove", function (details) {
  let valueX = details.clientX;
  let valueY = details.clientY;

  setTimeout(function () {
    circle.style.top = `${valueY}px`;
    circle.style.left = `${valueX}px`;
  }, 50);
});

btn.addEventListener("click", function () {
  timeline.reverse();
  setTimeout(function () {
    inner.style.position = "absolute";
    innertext.classList.add("animate");
  }, 5000);
});

let timeline = gsap.timeline();
timeline
  .from(".heading-letter", {
    duration: 4,
    scale: 0.7,
    ease: "Expo.easeInOut",
    opacity: 0,
  })
  .from(
    ".white-strip ",
    {
      duration: 2,
      ease: "Expo.easeInOut",
      width: 0,
    },
    "-=3"
  )
  .from(
    ".black-card",
    {
      duration: 1,
      ease: "Expo.easeInOut",
      x: 50,
      opacity: 0,
    },
    "-=1"
  )
  .from(".black-card p", {
    duration: 1,
    ease: "Expo.easeInOut",
    y: 30,
    opacity: 0,
  })
  .from(
    ".linelem",
    {
      duration: 1.5,
      ease: "Expo.easeInOut",
      x: 50,
      opacity: 0,
    },
    "-=2"
  )
  .from(
    ".line",
    {
      duration: 1,
      ease: "Expo.easeInOut",
      width: 0,
    },
    "-=1"
  )
  .from(
    ".side-text",
    {
      duration: 1,
      ease: "Expo.easeInOut",
      x: 30,
      opacity: 0,
    },
    "-=1"
  );
