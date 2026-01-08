const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove("open");
  }
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const meatCards = document.querySelectorAll(".meat-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.value;
    meatCards.forEach((card) => {
      const meatType = card.dataset.category;
      if (filter === "" || meatType === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});