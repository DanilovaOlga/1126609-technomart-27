var popupBackground = document.querySelector(".modal-back");

var openToCartPopup = document.querySelectorAll(".product-card-buy-btn");
var toCartPopup = document.querySelector(".modal-add-to-cart");

for (var i = 0; i < openToCartPopup.length; i++) {
  openToCartPopup[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    toCartPopup.classList.add("modal-show");
    popupBackground.classList.add("modal-back-show");
  });
}


document.querySelector(".modal-close-btn-to-cart").addEventListener("click", function (evt) {
  evt.preventDefault();
  toCartPopup.classList.remove("modal-show");
  popupBackground.classList.remove("modal-back-show");
});

document.querySelector(".continue-shopping-btn").addEventListener("click", function (evt) {
  evt.preventDefault();
  toCartPopup.classList.remove("modal-show");
  popupBackground.classList.remove("modal-back-show");
});

popupBackground.addEventListener("click", function () {
  toCartPopup.classList.remove("modal-show");
  popupBackground.classList.remove("modal-back-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    toCartPopup.classList.remove("modal-show");
    popupBackground.classList.remove("modal-back-show");
  }
});

if (document.querySelector(".main-index")) {

  var openMessagePopup = document.querySelector(".message-btn");
  var messagePopup = document.querySelector(".modal-message");

  var userName = messagePopup.querySelector("[name=user-name]");

  var openMap = document.querySelector(".map-image");
  var mapPopup = document.querySelector(".modal-map");


  // var showSecondSlide = document.querySelector(".sliders-btn-dot-second-slide");
  // var showFirstSlide = document.querySelector(".sliders-btn-dot-first-slide");

  openMessagePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.add("modal-show");
    popupBackground.classList.add("modal-back-show");
    userName.focus();
  });

  openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    popupBackground.classList.add("modal-back-show");
  });

  document.querySelector(".modal-close-btn-message").addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-show");
    popupBackground.classList.remove("modal-back-show");
  });

  document.querySelector(".modal-close-btn-map").addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    popupBackground.classList.remove("modal-back-show");
  });

  popupBackground.addEventListener("click", function () {
    messagePopup.classList.remove("modal-show");
    mapPopup.classList.remove("modal-show");
    popupBackground.classList.remove("modal-back-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
      mapPopup.classList.remove("modal-show");
      popupBackground.classList.remove("modal-back-show");
    }
  });

  var showNextSlide = document.querySelector(".special-offers-sliders-btn-right");
  var showPrevSlide = document.querySelector(".special-offers-sliders-btn-left");
  var popularToolsSlide = document.querySelectorAll(".popular-tools-item");
  var currentSlideIndex = 0;

  var sliderDots = document.querySelectorAll(".sliders-btn-dot");

  showNextSlide.addEventListener("click", function (evt) {
    evt.preventDefault();
    popularToolsSlide[currentSlideIndex].classList.remove("popular-tools-item-visible");
    sliderDots[currentSlideIndex].classList.remove("sliders-btn-dot-red");
    currentSlideIndex += 1;
    if (currentSlideIndex === popularToolsSlide.length) {
      currentSlideIndex = 0;
    }
    popularToolsSlide[currentSlideIndex].classList.add("popular-tools-item-visible");
    sliderDots[currentSlideIndex].classList.add("sliders-btn-dot-red");
  });

  showPrevSlide.addEventListener("click", function (evt) {
    evt.preventDefault();

    popularToolsSlide[currentSlideIndex].classList.remove("popular-tools-item-visible");
    sliderDots[currentSlideIndex].classList.remove("sliders-btn-dot-red");
    currentSlideIndex -= 1;
    if (currentSlideIndex === -1) {
      currentSlideIndex = popularToolsSlide.length - 1;
    }
    popularToolsSlide[currentSlideIndex].classList.add("popular-tools-item-visible");
    sliderDots[currentSlideIndex].classList.add("sliders-btn-dot-red");
  });

  for (var i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener("click", function (evt) {
        evt.preventDefault();

        popularToolsSlide[currentSlideIndex].classList.remove("popular-tools-item-visible");
        sliderDots[currentSlideIndex].classList.remove("sliders-btn-dot-red");

        var btn = evt.target;
        for (var i = 0; i < sliderDots.length; i++) {
          if (sliderDots[i] === btn) {
            currentSlideIndex = i;
            break;
          }
        }

        popularToolsSlide[currentSlideIndex].classList.add("popular-tools-item-visible");
        sliderDots[currentSlideIndex].classList.add("sliders-btn-dot-red");


      }
    )
  }
}
