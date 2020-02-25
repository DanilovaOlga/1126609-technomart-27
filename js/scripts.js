var showMessagePopup = document.querySelector(".message-btn");
var messagePopup = document.querySelector(".modal-message");
var closeMessagePopup = messagePopup.querySelector(".modal-close-btn");
var popupBackground = document.querySelector(".modal-back");

showMessagePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");
  popupBackground.classList.add("modal-back-show");
})

closeMessagePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
  popupBackground.classList.remove("modal-back-show");
})

popupBackground.addEventListener("click", function (evt) {
  messagePopup.classList.remove("modal-show");
  popupBackground.classList.remove("modal-back-show");
})
