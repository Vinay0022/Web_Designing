// Select all anchor tags that link to IDs
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  // Add a click event listener to each link
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default jump behavior

    // Get the target element using the href value
    const target = document.querySelector(this.getAttribute("href"));

    // If the target exists, scroll to it smoothly
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
