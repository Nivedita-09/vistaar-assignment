// script.js
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("knowMoreBtn")
    .addEventListener("click", redirectToOtherPage);

  const imageContainer = document.getElementById("imageContainer");

  const images = [
    "./assets/Campaign1.png",
    "./assets/Campaign2.png",
    "./assets/Campaign3.png",
    "./assets/Campaign4.png",
    "./assets/Campaign5.png",
    "./assets/Campaign6.png",
    "./assets/Campaign7.png",
  ];
  let currentIndex = 0;

  function changeImage() {
    const currentImage = imageContainer.querySelector(".image");

    // Set the opacity to 0 immediately
    currentImage.style.opacity = 0;

    // Change the image source
    currentIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[currentIndex];

    // Use a setTimeout to apply the fading effect after the image source has changed
    setTimeout(function () {
      // Fade in the new image
      currentImage.style.opacity = 1;
    }, 0);

    setTimeout(changeImage, 2000);
  }

  changeImage();
});

document.addEventListener("DOMContentLoaded", function () {
  const metric1Mini = document.getElementById("metric1-mini");
  const metric1 = document.getElementById("metric1");
  const metric2Mini = document.getElementById("metric2-mini");
  const metric2 = document.getElementById("metric2");
  const metric3Mini = document.getElementById("metric3-mini");
  const metric3 = document.getElementById("metric3");
  const metric4Mini = document.getElementById("metric4-mini");
  const metric4 = document.getElementById("metric4");
  const metric5Mini = document.getElementById("metric5-mini");
  const metric5 = document.getElementById("metric5");
  const metric6Mini = document.getElementById("metric6-mini");
  const metric6 = document.getElementById("metric6");
  const backBtn = document.getElementById("back-btn");
  const nextBtn = document.getElementById("next-btn");
  const circle1 = document.getElementById("filled-circle-1");
  const nonCircle1 = document.getElementById("non-filled-circle-1");
  const circle2 = document.getElementById("filled-circle-2");
  const nonCircle2 = document.getElementById("non-filled-circle-2");
  const circle3 = document.getElementById("filled-circle-3");
  const nonCircle3 = document.getElementById("non-filled-circle-3");
  const circle4 = document.getElementById("filled-circle-4");
  const nonCircle4 = document.getElementById("non-filled-circle-4");
  const circle5 = document.getElementById("filled-circle-5");
  const nonCircle5 = document.getElementById("non-filled-circle-5");
  const circle6 = document.getElementById("filled-circle-6");
  const nonCircle6 = document.getElementById("non-filled-circle-6");
  metric1Mini.style.display = "none";
  metric1.style.display = "block";
  metric2.style.display = "none";
  metric2Mini.style.display = "block";
  metric3.style.display = "none";
  metric3Mini.style.display = "block";
  metric4.style.display = "none";
  metric4Mini.style.display = "none";
  metric5.style.display = "none";
  metric5Mini.style.display = "none";
  metric6.style.display = "none";
  metric6Mini.style.display = "none";
  backBtn.style.display = "none";
  nextBtn.style.display = "block";
  circle1.style.display = "block";
  nonCircle1.style.display = "none";
  nonCircle2.style.display = "block";
  circle2.style.display = "none";
  nonCircle3.style.display = "block";
  circle3.style.display = "none";
  nonCircle4.style.display = "block";
  circle4.style.display = "none";
  nonCircle5.style.display = "block";
  circle5.style.display = "none";
  nonCircle6.style.display = "block";
  circle6.style.display = "none";

  var selectedCard = 0;
  document.getElementById("next-btn").addEventListener("click", toggleCards);
  function toggleCards() {
    if (selectedCard < 5) {
      selectedCard++;
    } else {
      selectedCard = 0;
    }
    console.log(selectedCard);

    switch (selectedCard) {
      case 0:
        metric1Mini.style.display = "none";
        metric1.style.display = "block";
        metric2.style.display = "none";
        metric2Mini.style.display = "block";
        metric3.style.display = "none";
        metric3Mini.style.display = "block";
        metric4.style.display = "none";
        metric4Mini.style.display = "none";
        metric5.style.display = "none";
        metric5Mini.style.display = "none";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "block";
        backBtn.style.display = "none";
        nonCircle1.style.display = "none";
        circle1.style.display = "block";
        nonCircle2.style.display = "block";
        circle2.style.display = "none";
        nonCircle3.style.display = "block";
        circle3.style.display = "none";
        nonCircle4.style.display = "block";
        circle4.style.display = "none";
        nonCircle5.style.display = "block";
        circle5.style.display = "none";
        nonCircle6.style.display = "block";
        circle6.style.display = "none";
        break;
      case 1:
        metric1.style.display = "none";
        metric1Mini.style.display = "block";
        metric2Mini.style.display = "none";
        metric2.style.display = "block";
        metric3.style.display = "none";
        metric3Mini.style.display = "block";
        metric4.style.display = "none";
        metric4Mini.style.display = "none";
        metric5.style.display = "none";
        metric5Mini.style.display = "none";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "block";
        backBtn.style.display = "none";
        circle1.style.display = "none";
        nonCircle1.style.display = "block";
        nonCircle2.style.display = "none";
        circle2.style.display = "block";
        nonCircle3.style.display = "block";
        circle3.style.display = "none";
        nonCircle4.style.display = "block";
        circle4.style.display = "none";
        nonCircle5.style.display = "block";
        circle5.style.display = "none";
        nonCircle6.style.display = "block";
        circle6.style.display = "none";
        break;
      case 2:
        metric1.style.display = "none";
        metric1Mini.style.display = "none";
        metric2.style.display = "none";
        metric2Mini.style.display = "block";
        metric3.style.display = "block";
        metric3Mini.style.display = "none";
        metric4.style.display = "none";
        metric4Mini.style.display = "block";
        metric5.style.display = "none";
        metric5Mini.style.display = "none";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "block";
        backBtn.style.display = "none";
        circle1.style.display = "none";
        nonCircle1.style.display = "block";
        nonCircle2.style.display = "block";
        circle2.style.display = "none";
        nonCircle3.style.display = "block";
        circle3.style.display = "block";
        nonCircle4.style.display = "none";
        circle4.style.display = "none";
        nonCircle5.style.display = "block";
        circle5.style.display = "none";
        nonCircle6.style.display = "block";
        circle6.style.display = "none";
        break;
      case 3:
        metric1.style.display = "none";
        metric1Mini.style.display = "none";
        metric2.style.display = "none";
        metric2Mini.style.display = "none";
        metric3.style.display = "none";
        metric3Mini.style.display = "block";
        metric4.style.display = "block";
        metric4Mini.style.display = "none";
        metric5.style.display = "none";
        metric5Mini.style.display = "block";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "block";
        backBtn.style.display = "none";
        circle1.style.display = "none";
        nonCircle1.style.display = "block";
        nonCircle2.style.display = "block";
        circle2.style.display = "none";
        nonCircle3.style.display = "block";
        circle3.style.display = "none";
        nonCircle4.style.display = "none";
        circle4.style.display = "block";
        nonCircle5.style.display = "block";
        circle5.style.display = "none";
        nonCircle6.style.display = "block";
        circle6.style.display = "none";
        break;
      case 4:
        metric1.style.display = "none";
        metric1Mini.style.display = "none";
        metric2.style.display = "none";
        metric2Mini.style.display = "none";
        metric3.style.display = "none";
        metric3Mini.style.display = "none";
        metric4.style.display = "none";
        metric4Mini.style.display = "block";
        metric5.style.display = "block";
        metric5Mini.style.display = "none";
        metric6.style.display = "none";
        metric6Mini.style.display = "block";
        nextBtn.style.display = "block";
        backBtn.style.display = "none";
        circle1.style.display = "none";
        nonCircle1.style.display = "block";
        nonCircle2.style.display = "block";
        circle2.style.display = "none";
        nonCircle3.style.display = "block";
        circle3.style.display = "none";
        nonCircle4.style.display = "block";
        circle4.style.display = "none";
        nonCircle5.style.display = "none";
        circle5.style.display = "block";
        nonCircle6.style.display = "block";
        circle6.style.display = "none";
        break;
      case 5:
        metric1.style.display = "none";
        metric1Mini.style.display = "none";
        metric2.style.display = "none";
        metric2Mini.style.display = "none";
        metric3.style.display = "none";
        metric3Mini.style.display = "none";
        metric4.style.display = "block";
        metric4Mini.style.display = "none";
        metric5.style.display = "none";
        metric5Mini.style.display = "block";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "none";
        backBtn.style.display = "block";
        circle1.style.display = "none";
        nonCircle1.style.display = "block";
        nonCircle2.style.display = "block";
        circle2.style.display = "none";
        nonCircle3.style.display = "block";
        circle3.style.display = "none";
        nonCircle4.style.display = "block";
        circle4.style.display = "none";
        nonCircle5.style.display = "block";
        circle5.style.display = "none";
        nonCircle6.style.display = "none";
        circle6.style.display = "block";
        break;
    }
  }
});

var selectedSection = 0;

const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");
const section3 = document.getElementById("section-3");
const section4 = document.getElementById("section-4");
const section5 = document.getElementById("section-5");
const menu1 = document.getElementById("sidebar-menu-1");
const menu2 = document.getElementById("sidebar-menu-2");
const menu3 = document.getElementById("sidebar-menu-3");
const menu4 = document.getElementById("sidebar-menu-4");
const menu5 = document.getElementById("sidebar-menu-5");
const tick1 = document.getElementById("tick1");
const tick2 = document.getElementById("tick2");
const tick3 = document.getElementById("tick3");
const tick4 = document.getElementById("tick4");
const tick5 = document.getElementById("tick5");

const backBtnCamp = document.getElementById("back-btn-campaign");
const nextBtnCamp = document.getElementById("next-btn-campaign");
section1.style.display = "block";
section2.style.display = "none";
section3.style.display = "none";
section4.style.display = "none";
section5.style.display = "none";
backBtnCamp.style.display = "none";
nextBtnCamp.style.display = "block";
menu1.style.opacity = "1";
tick1.style.display = "none";
tick1.style.opacity = "1";
menu2.style.opacity = "0.6";
tick2.style.display = "none";
tick2.style.opacity = "1";
menu3.style.opacity = "0.6";
tick3.style.display = "none";
tick3.style.opacity = "1";
menu4.style.opacity = "0.6";
tick4.style.display = "none";
tick4.style.opacity = "1";
menu5.style.opacity = "0.6";
tick5.style.display = "none";
tick5.style.opacity = "1";
function nextSection() {
  if (selectedSection < 4) {
    selectedSection++;
  } else {
    selectedSection = 0;
  }
  console.log(selectedSection);
  switch (selectedSection) {
    case 0:
      section1.style.display = "block";
      section2.style.display = "none";
      section3.style.display = "none";
      section4.style.display = "none";
      section5.style.display = "none";
      backBtnCamp.style.display = "none";
      nextBtnCamp.style.display = "block";
      menu1.style.opacity = "1";
      tick1.style.display = "none";
      tick1.style.opacity = "1";
      menu2.style.opacity = "0.6";
      tick2.style.display = "none";
      tick2.style.opacity = "1";
      menu3.style.opacity = "0.6";
      tick3.style.display = "none";
      tick3.style.opacity = "1";
      menu4.style.opacity = "0.6";
      tick4.style.display = "none";
      tick4.style.opacity = "1";
      menu5.style.opacity = "0.6";
      tick5.style.display = "none";
      tick5.style.opacity = "1";
      break;
    case 1:
      section1.style.display = "none";
      section2.style.display = "block";
      section3.style.display = "none";
      section4.style.display = "none";
      section5.style.display = "none";
      backBtnCamp.style.display = "block";
      nextBtnCamp.style.display = "block";
      menu1.style.opacity = "0.6";
      tick1.style.display = "block";
      tick1.style.opacity = "1";
      menu2.style.opacity = "1";
      tick2.style.display = "none";
      tick2.style.opacity = "1";
      menu3.style.opacity = "0.6";
      tick3.style.display = "none";
      tick3.style.opacity = "1";
      menu4.style.opacity = "0.6";
      tick4.style.display = "none";
      tick4.style.opacity = "1";
      menu5.style.opacity = "0.6";
      tick5.style.display = "none";
      tick5.style.opacity = "1";
      break;
    case 2:
      section1.style.display = "none";
      section2.style.display = "none";
      section3.style.display = "block";
      section4.style.display = "none";
      section5.style.display = "none";
      backBtnCamp.style.display = "block";
      nextBtnCamp.style.display = "block";

      menu1.style.opacity = "0.6";
      tick1.style.display = "block";
      tick1.style.opacity = "1";
      menu2.style.opacity = "0.6";
      tick2.style.display = "block";
      tick2.style.opacity = "1";
      menu3.style.opacity = "1";
      tick3.style.display = "none";
      tick3.style.opacity = "1";
      menu4.style.opacity = "0.6";
      tick4.style.display = "none";
      tick4.style.opacity = "1";
      menu5.style.opacity = "0.6";
      tick5.style.display = "none";
      tick5.style.opacity = "1";
      break;
    case 3:
      section1.style.display = "none";
      section2.style.display = "none";
      section3.style.display = "none";
      section4.style.display = "block";
      section5.style.display = "none";
      backBtnCamp.style.display = "block";
      nextBtnCamp.style.display = "block";

      menu1.style.opacity = "0.6";
      tick1.style.display = "block";
      tick1.style.opacity = "1";
      menu2.style.opacity = "0.6";
      tick2.style.display = "block";
      tick2.style.opacity = "1";
      menu3.style.opacity = "0.6";
      tick3.style.display = "block";
      tick3.style.opacity = "1";
      menu4.style.opacity = "1";
      tick4.style.display = "none";
      tick4.style.opacity = "1";
      menu5.style.opacity = "0.6";
      tick5.style.display = "none";
      tick5.style.opacity = "1";
      break;
    case 4:
      section1.style.display = "none";
      section2.style.display = "none";
      section3.style.display = "none";
      section4.style.display = "none";
      section5.style.display = "block";
      backBtnCamp.style.display = "block";
      nextBtnCamp.style.display = "block";
      menu1.style.opacity = "0.6";
      tick1.style.display = "block";
      tick1.style.opacity = "1";
      menu2.style.opacity = "0.6";
      tick2.style.display = "block";
      tick2.style.opacity = "1";
      menu3.style.opacity = "0.6";
      tick3.style.display = "block";
      tick3.style.opacity = "1";
      menu4.style.opacity = "0.6";
      tick4.style.display = "block";
      tick4.style.opacity = "1";
      menu5.style.opacity = "1";
      tick5.style.display = "none";
      tick5.style.opacity = "1";
      break;
  }
}

var unselectCard = getElementById("back-btn-campaign");
function backSection() {
  if (
    unselectCard == 2 ||
    unselectCard == 3 ||
    unselectCard == 4 ||
    unselectCard == 5
  ) {
    unselectCard--;
  } else {
    unselectCard = 4;
  }
  console.log(unselectCard);
  switch (unselectCard) {
    case 0:
      section1.style.display = "block";
      section2.style.display = "none";
      section3.style.display = "none";
      section4.style.display = "none";
      section5.style.display = "none";
      backBtnCamp.style.display = "none";
      nextBtnCamp.style.display = "block";
      break;
    case 1:
      section1.style.display = "none";
      section2.style.display = "block";
      section3.style.display = "none";
      section4.style.display = "none";
      section5.style.display = "none";
      backBtnCamp.style.display = "block";
      nextBtnCamp.style.display = "block";
      break;
    case 2:
      section1.style.display = "none";
      section2.style.display = "none";
      section3.style.display = "block";
      section4.style.display = "none";
      section5.style.display = "none";
      backBtnCamp.style.display = "block";
      nextBtnCamp.style.display = "block";
      break;
    case 3:
      section1.style.display = "none";
      section2.style.display = "none";
      section3.style.display = "none";
      section4.style.display = "block";
      section5.style.display = "none";
      backBtnCamp.style.display = "block";
      nextBtnCamp.style.display = "block";
      break;
    case 4:
      section1.style.display = "none";
      section2.style.display = "none";
      section3.style.display = "none";
      section4.style.display = "none";
      section5.style.display = "block";
      backBtnCamp.style.display = "block";
      nextBtnCamp.style.display = "block";
      break;
  }
}

function redirectToOtherPage() {
  // Your redirection logic
  window.location.href = "./KnowMore.html";
}
