        // JavaScript Code
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Navigation Toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Smooth Scrolling for Navigation Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                        }
                    }
                });
            });

            // Contact Form Submission to WhatsApp
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const phone = document.getElementById('phone').value;
                    const service = document.getElementById('service').value;
                    const message = document.getElementById('message').value;
                    
                    // Format the message for WhatsApp
                    const whatsappMessage = 
                        `New Inquiry from 3Trive Castles Website:%0A%0A` +
                        `*Name:* ${name}%0A` +
                        `*Email:* ${email}%0A` +
                        `*Phone:* ${phone}%0A` +
                        `*Service Interested In:* ${service}%0A` +
                        `*Message:* ${message}`;
                    
                    // Create WhatsApp URL
                    const whatsappNumber = '2348029665306';
                    const whatsappUrl = `https://wa.me/2348029665306?text=${whatsappMessage}`;
                    
                    // Open WhatsApp in a new tab
                    window.open(whatsappUrl, '_blank');
                    
                    // Optional: Reset the form
                    contactForm.reset();

                    alert('You will be redirected to WhatsApp to send your message.');
                });
            }
            
            // Newsletter Form Submission
            const newsletterForms = document.querySelectorAll('.newsletter-form');
            newsletterForms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const emailInput = this.querySelector('input[type="email"]');
                    if (emailInput) {
                        alert(`Thank you for subscribing with ${emailInput.value}!`);
                        emailInput.value = '';
                    }
                });
            });
            
            // Sticky Header on Scroll
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }
            });
            
            // Active Link Highlighting
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-links a');
            
            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${current}`) {
                        item.classList.add('active');
                    }
                });
            });
        });
