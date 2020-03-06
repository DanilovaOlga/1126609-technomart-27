// Купить - добавить в корзину

var popupBackground = document.querySelector(".modal-back");
var openToCartPopup = document.querySelectorAll(".product-card-buy-btn");
var toCartPopup = document.querySelector(".modal-add-to-cart");

for (var i = 0; i < openToCartPopup.length; i++) {
  openToCartPopup[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (toCartPopup.classList.contains("modal-close")) {
      toCartPopup.classList.remove("modal-close");
    }
    toCartPopup.classList.add("modal-show");
    toCartPopup.classList.add("modal-open");
    popupBackground.classList.add("modal-back-show");
  });
}

document.querySelector(".modal-close-btn-to-cart").addEventListener("click", function (evt) {
  evt.preventDefault();
  toCartPopup.classList.remove("modal-open");
  toCartPopup.classList.add("modal-close");
  popupBackground.classList.remove("modal-back-show");
  setTimeout(function () {
      toCartPopup.classList.remove("modal-show");
    }, 500
  );
});

document.querySelector(".continue-shopping-btn").addEventListener("click", function (evt) {
  evt.preventDefault();
  toCartPopup.classList.remove("modal-open");
  toCartPopup.classList.add("modal-close");
  popupBackground.classList.remove("modal-back-show");
  setTimeout(function () {
      toCartPopup.classList.remove("modal-show");
    }, 500
  );
});

popupBackground.addEventListener("click", function () {
  toCartPopup.classList.remove("modal-open");
  toCartPopup.classList.add("modal-close");
  popupBackground.classList.remove("modal-back-show");
  setTimeout(function () {
      toCartPopup.classList.remove("modal-show");
    }, 500
  );
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    toCartPopup.classList.remove("modal-open");
    toCartPopup.classList.add("modal-close");
    popupBackground.classList.remove("modal-back-show");
    setTimeout(function () {
        toCartPopup.classList.remove("modal-show");
      }, 500
    );
  }
});

if (document.querySelector(".main-index")) {

  // Отправить сообщение

  var openMessagePopup = document.querySelector(".message-btn");
  var messagePopup = document.querySelector(".modal-message");
  var userName = messagePopup.querySelector("[name=user-name]");
  var userEmail = messagePopup.querySelector("[name=user-email]");
  var userMessage = messagePopup.querySelector("[name=user-message]");
  var sendForm = messagePopup.querySelector(".modal-message-form");

  var isStorageSupport = true;
  var storageName = "";
  var storageEmail = "";

  try {
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
  } catch (err) {
    isStorageSupport = false;
  }

  openMessagePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (messagePopup.classList.contains("modal-close")) {
      messagePopup.classList.remove("modal-close")
    }
    messagePopup.classList.add("modal-show");
    messagePopup.classList.add("modal-open");
    popupBackground.classList.add("modal-back-show");
    if (storageName) {
      userName.value = storageName;
      userEmail.focus();
    } else {
      userName.focus();
    }
    if (storageEmail) {
      userEmail.value = storageEmail;
      userMessage.focus();
    }
  });

  sendForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !userMessage.value) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-error");
      messagePopup.offsetWidth = messagePopup.offsetWidth;
      messagePopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("userEmail", userEmail.value);
      }
    }
  });

  // Открыть карту

  var openMap = document.querySelector(".map-image");
  var mapPopup = document.querySelector(".modal-map");

  openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-close")) {
      mapPopup.classList.remove("modal-close")
    }
    mapPopup.classList.add("modal-show");
    mapPopup.classList.add("modal-open");
    popupBackground.classList.add("modal-back-show");
  });

  // Закрыть окно сообщения и карту

  document.querySelector(".modal-close-btn-message").addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-open");
    messagePopup.classList.remove("modal-error");
    popupBackground.classList.remove("modal-back-show");
    messagePopup.classList.add("modal-close");
    setTimeout(function () {
        messagePopup.classList.remove("modal-show");
      }, 500
    );
  });

  document.querySelector(".modal-close-btn-map").addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-open");
    popupBackground.classList.remove("modal-back-show");
    mapPopup.classList.add("modal-close");
    setTimeout(function () {
        mapPopup.classList.remove("modal-show");
      }, 500
    );
  });

  popupBackground.addEventListener("click", function () {
    popupBackground.classList.remove("modal-back-show");

    messagePopup.classList.remove("modal-open");
    messagePopup.classList.remove("modal-error");
    messagePopup.classList.add("modal-close");
    setTimeout(function () {
        messagePopup.classList.remove("modal-show");
      }, 500
    );

    mapPopup.classList.remove("modal-open");
    popupBackground.classList.remove("modal-back-show");
    mapPopup.classList.add("modal-close");
    setTimeout(function () {
        mapPopup.classList.remove("modal-show");
      }, 500
    );
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popupBackground.classList.remove("modal-back-show");

      messagePopup.classList.remove("modal-open");
      messagePopup.classList.remove("modal-error");
      messagePopup.classList.add("modal-close");
      setTimeout(function () {
          messagePopup.classList.remove("modal-show");
        }, 500
      );

      mapPopup.classList.remove("modal-open");
      popupBackground.classList.remove("modal-back-show");
      mapPopup.classList.add("modal-close");
      setTimeout(function () {
          mapPopup.classList.remove("modal-show");
        }, 500
      );
    }
  });

  // Слайдер промо блока по стрелкам

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

  // Слайдер промо блока по точкам

  for (var i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popularToolsSlide[currentSlideIndex].classList.remove("popular-tools-item-visible");
        sliderDots[currentSlideIndex].classList.remove("sliders-btn-dot-red");
        for (var i = 0; i < sliderDots.length; i++) {
          if (sliderDots[i] === evt.target) {
            currentSlideIndex = i;
            break;
          }
        }
        popularToolsSlide[currentSlideIndex].classList.add("popular-tools-item-visible");
        sliderDots[currentSlideIndex].classList.add("sliders-btn-dot-red");
      }
    )
  }

  // Слайдер сервисов

  var showServicesSlide = document.querySelectorAll(".services-btn");
  var servicesSlides = document.querySelectorAll(".services-sliders-item");

  for (var i = 0; i < showServicesSlide.length; i++) {
    showServicesSlide[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        servicesSlides[currentSlideIndex].classList.remove("services-sliders-item-visible");
        showServicesSlide[currentSlideIndex].classList.remove("services-btn-active");
        for (var j = 0; j < showServicesSlide.length; j++) {
          if (showServicesSlide[j] === evt.target) {
            currentSlideIndex = j;
            break;
          }
        }
        servicesSlides[currentSlideIndex].classList.add("services-sliders-item-visible");
        showServicesSlide[currentSlideIndex].classList.add("services-btn-active");
      }
    )
  }
}
