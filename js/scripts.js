var popupBackground = document.querySelector(".modal-back");

var showMessagePopup = document.querySelector(".message-btn");
var messagePopup = document.querySelector(".modal-message");
if (messagePopup)
  var closeMessagePopup = messagePopup.querySelector(".modal-close-btn-message");

var openMap = document.querySelector(".map-image");
var mapPopup = document.querySelector(".modal-map");
var closeMapPopup = mapPopup.querySelector(".modal-close-btn-map");

var userName = messagePopup.querySelector("[name=user-name]");

var buyProductBtn = document.querySelector(".product-card-buy-btn");
var addProductPopup = document.querySelector(".modal-add-to-cart");

showMessagePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");
  popupBackground.classList.add("modal-back-show");
  userName.focus();
});

if (messagePopup)
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

buyProductBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("тык по кнопке");
  addProductPopup.classList.add("modal-show");
});
