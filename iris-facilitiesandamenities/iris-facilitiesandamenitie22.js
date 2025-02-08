document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Simplify event listeners for next/previous and dot controls
  document.querySelector('.prev').addEventListener('click', () => modifySlide(-1));
  document.querySelector('.next').addEventListener('click', () => modifySlide(1));
  document.querySelectorAll('.dot').forEach((element, index) => {
      element.addEventListener('click', () => showSlides(slideIndex = index + 1));
  });

  function modifySlide(n) {
      showSlides(slideIndex += n);
  }

  function showSlides(n) {
      let slides = document.getElementsByClassName("slides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;

      Array.from(slides).forEach(slide => slide.style.display = "none");
      Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));

      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
  }
});

var coll = document.getElementsByClassName("rule-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
