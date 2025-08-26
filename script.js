// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .about-text, .contact-info, .contact-form');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Initialize captcha
    generateCaptcha();
    
    // Add refresh captcha functionality
    const refreshBtn = document.getElementById('refreshCaptcha');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', generateCaptcha);
    }
    
    // Initialize form validator
    formValidator = new FormValidator('contactForm');
});

// Captcha System
let captchaAnswer = 0;

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '×'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let question, answer;
    
    switch (operator) {
        case '+':
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '×':
            question = `${num1} × ${num2}`;
            answer = num1 * num2;
            break;
    }
    
    document.getElementById('captchaQuestion').textContent = question;
    captchaAnswer = answer;
}

// Enhanced Form Validation
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.fields = {};
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        // Define validation rules
        this.fields = {
            name: {
                element: this.form.querySelector('#name'),
                rules: ['required', 'minLength:2', 'maxLength:50'],
                errorElement: this.form.querySelector('#name-error')
            },
            email: {
                element: this.form.querySelector('#email'),
                rules: ['required', 'email'],
                errorElement: this.form.querySelector('#email-error')
            },
            company: {
                element: this.form.querySelector('#company'),
                rules: ['maxLength:100'],
                errorElement: this.form.querySelector('#company-error')
            },
            service: {
                element: this.form.querySelector('#service'),
                rules: [],
                errorElement: this.form.querySelector('#service-error')
            },
            message: {
                element: this.form.querySelector('#message'),
                rules: ['required', 'minLength:10', 'maxLength:1000'],
                errorElement: this.form.querySelector('#message-error')
            },
            captcha: {
                element: this.form.querySelector('#captcha'),
                rules: ['required', 'captcha'],
                errorElement: this.form.querySelector('#captcha-error')
            }
        };
        
        // Add event listeners
        this.addEventListeners();
    }
    
    addEventListeners() {
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            if (field.element) {
                field.element.addEventListener('blur', () => this.validateField(fieldName));
                field.element.addEventListener('input', () => this.clearFieldError(fieldName));
            }
        });
    }
    
    validateField(fieldName) {
        const field = this.fields[fieldName];
        if (!field) return true;
        
        const value = field.element.value.trim();
        const formGroup = field.element.closest('.form-group');
        
        // Clear previous states
        this.clearFieldError(fieldName);
        
        // Validate each rule
        for (const rule of field.rules) {
            const [ruleName, ruleValue] = rule.split(':');
            
            if (!this.validateRule(ruleName, value, ruleValue, fieldName)) {
                this.showFieldError(fieldName, this.getErrorMessage(ruleName, ruleValue));
                return false;
            }
        }
        
        // Show success state
        this.showFieldSuccess(fieldName);
        return true;
    }
    
    validateRule(ruleName, value, ruleValue, fieldName) {
        switch (ruleName) {
            case 'required':
                return value.length > 0;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            case 'minLength':
                return value.length >= parseInt(ruleValue);
            case 'maxLength':
                return value.length <= parseInt(ruleValue);
            case 'captcha':
                return parseInt(value) === captchaAnswer;
            default:
                return true;
        }
    }
    
    getErrorMessage(ruleName, ruleValue) {
        switch (ruleName) {
            case 'required':
                return 'This field is required.';
            case 'email':
                return 'Please enter a valid email address.';
            case 'minLength':
                return `This field must be at least ${ruleValue} characters long.`;
            case 'maxLength':
                return `This field must be no more than ${ruleValue} characters long.`;
            case 'captcha':
                return 'Please enter the correct answer to the security question.';
            default:
                return 'Invalid input.';
        }
    }
    
    showFieldError(fieldName, message) {
        const field = this.fields[fieldName];
        if (!field) return;
        
        const formGroup = field.element.closest('.form-group');
        formGroup.classList.remove('success');
        formGroup.classList.add('error');
        
        if (field.errorElement) {
            field.errorElement.textContent = message;
        }
    }
    
    showFieldSuccess(fieldName) {
        const field = this.fields[fieldName];
        if (!field) return;
        
        const formGroup = field.element.closest('.form-group');
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
    }
    
    clearFieldError(fieldName) {
        const field = this.fields[fieldName];
        if (!field) return;
        
        const formGroup = field.element.closest('.form-group');
        formGroup.classList.remove('error', 'success');
        
        if (field.errorElement) {
            field.errorElement.textContent = '';
        }
    }
    
    validateForm() {
        let isValid = true;
        
        Object.keys(this.fields).forEach(fieldName => {
            if (!this.validateField(fieldName)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    resetForm() {
        Object.keys(this.fields).forEach(fieldName => {
            this.clearFieldError(fieldName);
            if (this.fields[fieldName].element) {
                this.fields[fieldName].element.value = '';
            }
        });
        generateCaptcha();
    }
}

// Initialize form validator
let formValidator;

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        if (!formValidator || !formValidator.validateForm()) {
            showNotification('Please correct the errors in the form before submitting.', 'error');
            return;
        }
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.innerHTML = '<span class="loading"></span> Sending...';
        submitButton.disabled = true;
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
            
            // Reset form and captcha
            if (formValidator) {
                formValidator.resetForm();
            }
            
        } catch (error) {
            // Show error message
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2d5a27' : type === 'error' ? '#dc3545' : '#007bff'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}



// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Service cards hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the next line to enable typing effect
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2d5a27 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);