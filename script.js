
        // Mobile Menu Toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
        
        // Purchase Modal
        const modal = document.getElementById('purchaseModal');
        const buyBtn = document.getElementById('buy-btn');
        const closeModal = document.querySelector('.close-modal');
        const purchaseForm = document.getElementById('purchaseForm');
        const successMessage = document.getElementById('successMessage');
        
        buyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
        
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        purchaseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(purchaseForm);
            const email = formData.get('email');
            const name = formData.get('name');
            
            // Here you would normally send this data to your server
            // For demonstration, we'll just show the success message
            
            // Show success message
            purchaseForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // In a real implementation, you would send an email notification to the owner
            // This is where you'd add the server-side code or API call
            
            // Sample code for sending email (this would happen on your server)
            /*
            sendEmail({
                to: 'owner@fitnessevolution.com',
                subject: 'New Guide Purchase',
                body: `New purchase from ${name} (${email})`
            });
            */
            
            // Reset form after 5 seconds and close modal after 8 seconds
            setTimeout(() => {
                purchaseForm.reset();
                purchaseForm.style.display = 'block';
                successMessage.style.display = 'none';
            }, 5000);
            
            setTimeout(() => {
                modal.style.display = 'none';
            }, 8000);
            
            // Simulate sending email to owner (in a real application, this would be done server-side)
            console.log('Email notification sent to owner about new purchase');
        });
        
        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Here you would normally send this data to your server
            // For demonstration purposes, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
        
        // Create PDF content for download
        class FitnessPDF {
            constructor(userName, userEmail) {
                this.userName = userName;
                this.userEmail = userEmail;
                this.purchaseDate = new Date().toLocaleDateString();
                this.content = this.generateContent();
            }
            
            generateContent() {
                // In a real implementation, this would generate a PDF file
                // For demonstration purposes, we'll just return the content that would be in the PDF
                return `
                    FITNESS EVOLUTION PREMIUM GUIDE
                    
                    Purchased by: ${this.userName}
                    Email: ${this.userEmail}
                    Date: ${this.purchaseDate}
                    
                    CONTENTS:
                    
                    1. Introduction to Fitness Evolution
                    2. Understanding Your Body and Fitness Goals
                    3. The 12-Week Progressive Workout Plan
                       a. Beginner Phase (Weeks 1-4)
                       b. Intermediate Phase (Weeks 5-8)
                       c. Advanced Phase (Weeks 9-12)
                    4. Customizable Nutrition Guide
                       a. Calculating Your Caloric Needs
                       b. Macronutrient Breakdown
                       c. Meal Planning and Prep
                       d. Sample Meal Plans for Different Goals
                    5. Exercise Library and Technique Guides
                    6. Progress Tracking Tools
                    7. Recovery and Injury Prevention
                    8. Long-term Sustainability Plan
                    
                    Thank you for purchasing the Fitness Evolution Premium Guide!
                    
                    For support, contact us at support@fitnessevolution.com
                `;
            }
            
            // In a real implementation, this would create and return a PDF file
            getPDF() {
                return this.content;
            }
        }
        
        // Email sending functionality (simulation)
        function sendPurchaseNotification(userName, userEmail) {
            // In a real implementation, this would send an email to the site owner
            // using a server-side script or API (e.g., SendGrid, Mailchimp, etc.)
            
            const emailContent = {
                to: 'owner@fitnessevolution.com',
                from: 'notifications@fitnessevolution.com',
                subject: 'New Premium Guide Purchase',
                body: `
                    New Premium Guide Purchase Details:
                    
                    Customer Name: ${userName}
                    Customer Email: ${userEmail}
                    Purchase Date: ${new Date().toLocaleDateString()}
                    Purchase Time: ${new Date().toLocaleTimeString()}
                    Product: Fitness Evolution Premium Guide
                    Price: $29.99
                    
                    This purchase has been automatically processed and the guide has been sent to the customer.
                `
            };
            
            console.log('Email notification would be sent with the following details:');
            console.log(emailContent);
            
            // Return true to simulate successful email sending
            return true;
        }
        
        // Function to send the PDF guide to customer (simulation)
        function sendGuideToCustomer(userName, userEmail) {
            // Create the PDF guide
            const pdfGuide = new FitnessPDF(userName, userEmail);
            
            // In a real implementation, this would email the PDF to the customer
            // using a server-side script or API
            
            const emailContent = {
                to: userEmail,
                from: 'support@fitnessevolution.com',
                subject: 'Your Fitness Evolution Premium Guide',
                body: `
                    Dear ${userName},
                    
                    Thank you for purchasing the Fitness Evolution Premium Guide! 
                    
                    Attached to this email, you'll find your comprehensive guide that will help you transform your fitness journey.
                    
                    Key features included in your guide:
                    - 12-Week Progressive Workout Plan
                    - Customizable Nutrition Guide
                    - Exercise Library with Technique Guides
                    - Progress Tracking Tools
                    - And much more!
                    
                    If you have any questions or need support, please don't hesitate to contact us at support@fitnessevolution.com.
                    
                    Stay healthy,
                    The Fitness Evolution Team
                `,
                attachment: pdfGuide.getPDF()
            };
            
            console.log('Guide would be sent to customer with the following details:');
            console.log(emailContent);
            
            // Return true to simulate successful email sending
            return true;
        }
        
        // Enhance purchase form to use the email functions
        purchaseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const nameInput = purchaseForm.querySelector('input[type="text"]');
            const emailInput = purchaseForm.querySelector('input[type="email"]');
            
            const userName = nameInput.value;
            const userEmail = emailInput.value;
            
            // Send notification to owner
            const ownerNotified = sendPurchaseNotification(userName, userEmail);
            
            // Send guide to customer
            const guideSent = sendGuideToCustomer(userName, userEmail);
            
            // Show success message
            if (ownerNotified && guideSent) {
                purchaseForm.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Reset form after 5 seconds and close modal after 8 seconds
                setTimeout(() => {
                    purchaseForm.reset();
                    purchaseForm.style.display = 'block';
                    successMessage.style.display = 'none';
                }, 5000);
                
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 8000);
            }
        });
        
        // Add scroll animation for elements
        function revealOnScroll() {
            const elements = document.querySelectorAll('.about-box, .program-card, .testimonial-card');
            const windowHeight = window.innerHeight;
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Initial styles for scroll animation
        document.querySelectorAll('.about-box, .program-card, .testimonial-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Add scroll event listener
        window.addEventListener('scroll', revealOnScroll);
        
        // Initial check for elements in view
        window.addEventListener('load', revealOnScroll);
    // new lines
