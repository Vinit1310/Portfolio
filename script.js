// Form Validation Function
function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting automatically
  
    // Get form values
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
  
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields!');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // If everything is valid, display a success message (simulate form submission)
    alert('Thank you for your message! I will get back to you soon.');
    document.querySelector('form').reset(); // Reset form after submission
  }
  
  // Function to validate email format using regex
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
  // Add event listener to the contact form submit button
  document.querySelector('form').addEventListener('submit', validateForm);
  
  // Smooth Scroll for Navigation Links
  const links = document.querySelectorAll('nav ul li a');
  
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
  
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 50,  // Scroll to the section, adjusted for the header
        behavior: 'smooth'                  // Smooth scrolling
      });
    });
  });
  
