
const contactBtn = document.getElementById("contactBtn");
const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close-btn");

// Show modal
contactBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // makes modal visible (because modal uses flex), as initially it was using none.
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // hides it again
});
