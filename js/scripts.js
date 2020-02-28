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
}
