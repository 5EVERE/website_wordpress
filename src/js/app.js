document.querySelector(".more_img").addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(".optimization")
    .scrollIntoView({ behavior: "smooth" });
});
const addHidden = function () {
  document.querySelector(".modal-window").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};
const removeHidden = function () {
  document.querySelector(".modal-window").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
};
const btnRegister = document.querySelectorAll(".btn-reg");
btnRegister.forEach((btn) => {
  btn.addEventListener("click", function () {
    removeHidden();
  });
});
const btnCloseRegister = document.querySelector(".btn--close-modal-window");
btnCloseRegister.addEventListener("click", function () {
  addHidden();
});
document.querySelector(".overlay").addEventListener("click", function () {
  addHidden();
});
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !document.querySelector(".modal-window").classList.contains("hidden")
  ) {
    addHidden();
  }
});
