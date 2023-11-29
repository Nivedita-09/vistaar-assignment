document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.getElementById("section-1");
  const section2 = document.getElementById("section-2");
  const section3 = document.getElementById("section-3");
  const section4 = document.getElementById("section-4");
  const section5 = document.getElementById("section-5");
  const menus = document.getElementById("sidebar-menus-div");
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

  menus.style.display = " block";
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
  // nextbtncampaign.style.display= "block";

  if (nextBtnCamp) {
    nextBtnCamp.addEventListener("click", nextSection);
  } else {
    console.error("Element with ID 'next-btn-campaign' does not exist");
  }
  if (section5) {
    section5.style.display = "none";
  } else {
    console.error('Element with ID "section5" not found');
  }
  var selectedSection = 0;
  //   document
  //     .getElementById("back-btn-campaign")
  //     .addEventListener("click", nextSection);
  document
    .getElementById("next-btn-campaign")
    .addEventListener("click", nextSection);
  function nextSection() {
    if (selectedSection < 4) {
      selectedSection++;
    } else {
      selectedSection = 0;
    }
    console.log(selectedSection);
    switch (selectedSection) {
      case 0:
        menus.style.display = " block";
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
        menus.style.display = " block";
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
        menus.style.display = " block";
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
        menus.style.display = " block";
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
        menus.style.display = " none";
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "block";
        backBtnCamp.style.display = "none";
        nextBtnCamp.style.display = "none";
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
});
