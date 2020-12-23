// back-to-top button behaviour
document.addEventListener("scroll", function() {
  var e = document.getElementById('back2top');
  if (window.scrollY > 150) {
    e.classList.add("visible")
  } else {
    e.classList.remove("visible")
  }
});
