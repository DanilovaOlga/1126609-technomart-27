var popupBackground = document.querySelector(".modal-back");

var showMessagePopup = document.querySelector(".message-btn");
var messagePopup = document.querySelector(".modal-message");
var closeMessagePopup = messagePopup.querySelector(".modal-close-btn");

var openMap = document.querySelector(".map-image");
var mapPopup = document.querySelector(".modal-map");
var closeMapPopup = mapPopup.querySelector(".modal-close-btn-map");

var userName = messagePopup.querySelector("[name=user-name]");
var userEmail = messagePopup.querySelector("[name=user-email]");
var userMessage = messagePopup.querySelector("[name=user-message]");

showMessagePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");
  popupBackground.classList.add("modal-back-show");
  userName.focus();
});

closeMessagePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
  popupBackground.classList.remove("modal-back-show");
});

openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  popupBackground.classList.add("modal-back-show");
});

closeMapPopup.addEventListener("click" , function (evt) {
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

