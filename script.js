// Parallax Effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    parallax.forEach(function(section) {
      let scrollPosition = window.pageYOffset;
      let sectionOffset = section.offsetTop;
      let sectionHeight = section.offsetHeight;
  
      if (scrollPosition > sectionOffset - window.innerHeight && scrollPosition <= sectionOffset + sectionHeight) {
        section.style.backgroundPositionY = (scrollPosition - sectionOffset) * 0.7 + 'px';
      }
    });
  });
  
  // Contact Form Submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach(function(value, key) {
      jsonData[key] = value;
    });
    // Send jsonData to your email or backend for processing
    console.log(jsonData); // For demonstration
    alert('Message sent successfully!'); // Replace with actual submission handling
    this.reset(); // Reset form after submission
  });
  // Toggle Navigation Menu
document.getElementById('toggle-nav').addEventListener('change', function() {
    const nav = document.querySelector('nav ul');
    if (this.checked) {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  });
  