const toggleElement = document.querySelector(
  ".flex.w-8.h-4.md\\:hidden.flex-col.justify-between"
);

const mobileLinks = document.querySelector(".hidden.md\\:hidden");

toggleElement.addEventListener("click", () => {
  mobileLinks.classList.toggle("hidden");
});
