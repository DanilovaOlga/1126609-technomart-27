for(var popupBackground=document.querySelector(".modal-back"),openToCartPopup=document.querySelectorAll(".product-card-buy-btn"),toCartPopup=document.querySelector(".modal-add-to-cart"),i=0;i<openToCartPopup.length;i++)openToCartPopup[i].addEventListener("click",function(e){e.preventDefault(),toCartPopup.classList.add("modal-show"),popupBackground.classList.add("modal-back-show")});if(document.querySelector(".modal-close-btn-to-cart").addEventListener("click",function(e){e.preventDefault(),toCartPopup.classList.remove("modal-show"),popupBackground.classList.remove("modal-back-show")}),document.querySelector(".continue-shopping-btn").addEventListener("click",function(e){e.preventDefault(),toCartPopup.classList.remove("modal-show"),popupBackground.classList.remove("modal-back-show")}),popupBackground.addEventListener("click",function(){toCartPopup.classList.remove("modal-show"),popupBackground.classList.remove("modal-back-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),toCartPopup.classList.remove("modal-show"),popupBackground.classList.remove("modal-back-show"))}),document.querySelector(".main-index")){var openMessagePopup=document.querySelector(".message-btn"),messagePopup=document.querySelector(".modal-message"),userName=messagePopup.querySelector("[name=user-name]"),userEmail=messagePopup.querySelector("[name=user-email]"),userMessage=messagePopup.querySelector("[name=user-message]"),sendForm=messagePopup.querySelector(".modal-message-form"),isStorageSupport=!0,storageName="",storageEmail="";try{storageName=localStorage.getItem("userName"),storageEmail=localStorage.getItem("userEmail")}catch(e){isStorageSupport=!1}openMessagePopup.addEventListener("click",function(e){e.preventDefault(),messagePopup.classList.add("modal-show"),messagePopup.classList.add("modal-message-open"),popupBackground.classList.add("modal-back-show"),storageName?(userName.value=storageName,userEmail.focus()):userName.focus(),storageEmail&&(userEmail.value=storageEmail,userMessage.focus())}),sendForm.addEventListener("submit",function(e){userName.value&&userEmail.value&&userMessage.value?isStorageSupport&&(localStorage.setItem("userName",userName.value),localStorage.setItem("userEmail",userEmail.value)):(e.preventDefault(),messagePopup.classList.remove("modal-error"),messagePopup.offsetWidth=messagePopup.offsetWidth,messagePopup.classList.add("modal-error"))});var openMap=document.querySelector(".map-image"),mapPopup=document.querySelector(".modal-map");openMap.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show"),popupBackground.classList.add("modal-back-show")}),document.querySelector(".modal-close-btn-message").addEventListener("click",function(e){e.preventDefault(),messagePopup.classList.remove("modal-show"),messagePopup.classList.remove("modal-error"),popupBackground.classList.remove("modal-back-show")}),document.querySelector(".modal-close-btn-map").addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show"),popupBackground.classList.remove("modal-back-show")}),popupBackground.addEventListener("click",function(){messagePopup.classList.remove("modal-show"),messagePopup.classList.remove("modal-error"),mapPopup.classList.remove("modal-show"),popupBackground.classList.remove("modal-back-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),messagePopup.classList.remove("modal-show"),messagePopup.classList.remove("modal-error"),mapPopup.classList.remove("modal-show"),popupBackground.classList.remove("modal-back-show"))});var showNextSlide=document.querySelector(".special-offers-sliders-btn-right"),showPrevSlide=document.querySelector(".special-offers-sliders-btn-left"),popularToolsSlide=document.querySelectorAll(".popular-tools-item"),currentSlideIndex=0,sliderDots=document.querySelectorAll(".sliders-btn-dot");showNextSlide.addEventListener("click",function(e){e.preventDefault(),popularToolsSlide[currentSlideIndex].classList.remove("popular-tools-item-visible"),sliderDots[currentSlideIndex].classList.remove("sliders-btn-dot-red"),(currentSlideIndex+=1)===popularToolsSlide.length&&(currentSlideIndex=0),popularToolsSlide[currentSlideIndex].classList.add("popular-tools-item-visible"),sliderDots[currentSlideIndex].classList.add("sliders-btn-dot-red")}),showPrevSlide.addEventListener("click",function(e){e.preventDefault(),popularToolsSlide[currentSlideIndex].classList.remove("popular-tools-item-visible"),sliderDots[currentSlideIndex].classList.remove("sliders-btn-dot-red"),-1===--currentSlideIndex&&(currentSlideIndex=popularToolsSlide.length-1),popularToolsSlide[currentSlideIndex].classList.add("popular-tools-item-visible"),sliderDots[currentSlideIndex].classList.add("sliders-btn-dot-red")});for(i=0;i<sliderDots.length;i++)sliderDots[i].addEventListener("click",function(e){e.preventDefault(),popularToolsSlide[currentSlideIndex].classList.remove("popular-tools-item-visible"),sliderDots[currentSlideIndex].classList.remove("sliders-btn-dot-red");for(var s=0;s<sliderDots.length;s++)if(sliderDots[s]===e.target){currentSlideIndex=s;break}popularToolsSlide[currentSlideIndex].classList.add("popular-tools-item-visible"),sliderDots[currentSlideIndex].classList.add("sliders-btn-dot-red")});var showServicesSlide=document.querySelectorAll(".services-btn"),servicesSlides=document.querySelectorAll(".services-sliders-item");for(i=0;i<showServicesSlide.length;i++)showServicesSlide[i].addEventListener("click",function(e){e.preventDefault(),servicesSlides[currentSlideIndex].classList.remove("services-sliders-item-visible"),showServicesSlide[currentSlideIndex].classList.remove("services-btn-active");for(var s=0;s<showServicesSlide.length;s++)if(showServicesSlide[s]===e.target){currentSlideIndex=s;break}servicesSlides[currentSlideIndex].classList.add("services-sliders-item-visible"),showServicesSlide[currentSlideIndex].classList.add("services-btn-active")})}
