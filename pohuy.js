const title = document.querySelector(".title");
const modal = document.querySelector(".modal");

console.log(title, modal);

title.addEventListener("click", () => {
  modal.classList.add("open");
});
