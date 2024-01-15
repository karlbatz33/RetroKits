// Wait for the HTML document to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
  
    // Initialize a variable to keep track of the current slide
    let currentSlide = 1;
  
    // Function to display a specific slide
    function showSlide(n) {
        // Get all elements with the class 'carousel-slide'
        const slides = document.querySelectorAll('.carousel-slide');
        
        // Check if n is greater than the total number of slides, reset to the first slide
        if (n > slides.length) {
            currentSlide = 1;
        }
        
        // Check if n is less than 1, set to the last slide
        if (n < 1) {
            currentSlide = slides.length;
        }

        // Hide all slides by setting opacity to 0 and display to 'none'
        slides.forEach(slide => {
            slide.style.opacity = 0;
            slide.style.display = 'none';
        });

        // Display the current slide
        slides[currentSlide - 1].style.display = 'block';
        
        // Trigger a reflow before changing the opacity to enable the transition
        slides[currentSlide - 1].offsetWidth;
        
        // Set the opacity to 1 to make the slide visible
        slides[currentSlide - 1].style.opacity = 1;

        // Set a timeout to start fading out after a delay (adjust the time as needed)
        setTimeout(() => {
            slides[currentSlide - 1].style.opacity = 0;
        }, 4000); // 4000 milliseconds (4 seconds) in this example, adjust as needed
    }
  
    // Function to show the next slide
    function nextSlide() {
        showSlide(currentSlide += 1);
    }
  
    // Set interval for automatic sliding (adjust the time as needed)
    setInterval(nextSlide, 6000); // 6000 milliseconds (6 seconds) in this example, adjust as needed
  
    // Display the initial slide when the page loads
    showSlide(currentSlide);
});