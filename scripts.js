document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "☰";
  toggleButton.style.fontSize = "1.5rem";
  toggleButton.style.background = "none";
  toggleButton.style.border = "none";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.display = "none";

  const navbar = document.querySelector(".navbar");
  navbar.appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      nav.classList.add("hidden");
      toggleButton.style.display = "block";
    } else {
      nav.classList.remove("hidden");
      toggleButton.style.display = "none";
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();
});
