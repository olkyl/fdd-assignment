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
// Collapse the rules
document.addEventListener('DOMContentLoaded', () => {
  const coll = document.querySelectorAll('.rule-collapsible');

  coll.forEach(btn => {
      btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          content.style.display === 'block' ? content.style.display = 'none' : content.style.display = 'block';
      });
  });
});

//Rating-Feedback
document.addEventListener('DOMContentLoaded', () => {
  let rating = 0;

  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
      star.addEventListener('click', () => {
          rating = star.getAttribute('data-value');
          console.log(`Rating: ${rating} stars`);

          // Highlight the stars
          stars.forEach(s => {
              s.style.color = s.getAttribute('data-value') >= rating ? 'gold' : 'grey';
          });
      });
  });

  const feedbackForm = document.getElementById('feedbackForm');
  feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault(); 
      const feedback = document.getElementById('feedback').value;
      console.log(`Feedback: ${feedback}`);
      alert(`Thank you for the rating and feedback!`);
  });
});