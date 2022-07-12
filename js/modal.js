const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal--close");
const addCityBtn = document.querySelector(".content__cards__card__btn");

addCityBtn.addEventListener("click", toggleModal);
modalCloseBtn.addEventListener("click", closeModal);



function closeModal() {
  modal.classList.remove("modal-visible");
  document.body.classList.remove("disable--scroll");
}



function toggleModal() {
  modal.classList.toggle("modal-visible");
  modal.classList.toggle("disable--scroll");
  window.scrollTo(0, 0);
}
