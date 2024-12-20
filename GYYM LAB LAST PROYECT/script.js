let slideIndex = 0;

// Initialize the slideshow
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show the next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  
  // Change slide every 4 seconds
  setTimeout(showSlides, 4000);
}

// Manual navigation
function plusSlides(n) {
  slideIndex += n - 1; // Adjust index for next/prev
  const slides = document.getElementsByClassName("slide");
  
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
