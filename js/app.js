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

let isMobile = false;

function resetTransform(element) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(0px)`;
}

// remove paralax fx on mobile screen, add it if on computer
$(window).on("resize load", function () {
  if ($(window).width() <= 768) {
    isMobile = true;

    // reset paralax element transform
    resetTransform("#about-content");
    resetTransform("#theme-blue");
    resetTransform("#theme-image");
    resetTransform("#theme-statue");

    // remove parallax fx
    $("#about-content").removeClass("parallax1");
    $("#theme-image").removeClass("parallax2");
    $("#theme-blue").removeClass("parallax3");
    $("#theme-statue").removeClass("parallax4");
  } else {
    isMobile = false;

    // add parallax fx
    $("#about-content").addClass("parallax1");
    $("#theme-image").addClass("parallax2");
    $("#theme-blue").addClass("parallax3");
    $("#theme-statue").addClass("parallax4");
  }
});

// parallax
if ($(window).width() > 768) {
  // parallax fx on scroll
  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  // on scroll event
  window.addEventListener("scroll", function () {
    if (isMobile === false) {
      parallax(".parallax1", window.scrollY, 0.1);
      parallax(".parallax2", window.scrollY, 0.7);
      parallax(".parallax3", window.scrollY, 0.80);
      parallax(".parallax4", window.scrollY, 0.99);
    } else {
      return;
    }
  });
}
// ------------- typing FX -----------------------------

const texts = [
  "Game Development ",
  "App Development ",
  "Website Development ",
  "UI Design ",
  "Programming ",
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

//------------------- fade in effects when scrolling --------------------
const faders = document.querySelectorAll(".fade-in-scroll");


const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -240px 0px'
};


const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      
      entry.target.classList.remove("appear");
      // return;
    } else {
      entry.target.classList.add("appear");
      // appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});


//------------------- slide in effects when scrolling --------------------
const sliders =  document.querySelectorAll('.slide-in-scroll')

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})