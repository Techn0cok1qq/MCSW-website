document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".kit-items img");

  items.forEach(item => {
    item.addEventListener("click", function(e) {

      items.forEach(i => i.classList.remove("show-tooltip"));

      item.classList.add("show-tooltip");
    });
  });

  document.addEventListener("click", function(e) {
    if (!e.target.closest(".kit-items img")) {
      items.forEach(i => i.classList.remove("show-tooltip"));
    }
  });
});