const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";

//----------------parallax FX----------------------------------

// function parallax(element, distance, speed) {
//   const item = document.querySelector(element);
//   item.style.transform = `translateY(${distance * speed}px)`;
// }

// window.addEventListener("scroll", function () {
//   parallax(".theme-image", window.scrollY, 0.525);

//   parallax(".theme-image-blue", window.scrollY, 0.625);

//   parallax(".parallax", window.scrollY, 0.225);
// });

// new
let isMobile = false;

function resetTransform(element) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(0px)`;
}

function resetFade(element) {
  const item = document.querySelector(element);
  item.style.opacity = `1`;
}

// remove paralax fx on mobile screen, add it if on computer
$(window).on("resize load", function () {
  if ($(window).width() <= 768) {
    isMobile = true;

    // reset paralax element transform
    resetTransform("#about-content");
    resetTransform("#theme-blue");
    resetTransform("#theme-image");

    // remove parallax fx
    $("#about-content").removeClass("parallax1");
    $("#theme-image").removeClass("parallax2");
    $("#theme-blue").removeClass("parallax3");
  } else {
    isMobile = false;

    // add parallax fx
    $("#about-content").addClass("parallax1");
    $("#theme-image").addClass("parallax2");
    $("#theme-blue").addClass("parallax3");
  }
});

//-------------------FX------------------------------

if ($(window).width() > 768) {
  // parallax fx on scroll
  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  // on scroll event
  window.addEventListener("scroll", function () {
    if (isMobile === false) {
      parallax(".parallax1", window.scrollY, 0.225);
      parallax(".parallax2", window.scrollY, 0.525);
      parallax(".parallax3", window.scrollY, 0.625);
    } else {
      return;
    }
  });
}
// ------------- typing FX -----------------------------

const texts = [
  "Game Development ",
  "Programming ",
  " UI & UX Design ",
  "Web Design ",
  "Web Development ",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 110);
})();

// modal fx

const modalBtn = document.querySelector(".contact");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
  $("html").css("overflow", "hidden");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
  $("html").css("overflow", "auto");
});
