# Palm Tree Tech LLC - Company Website

A modern, responsive presentation website for Palm Tree Tech LLC, showcasing bespoke software development services, AI consultancy, and SaaS product development.

## 🌟 Features

### Design & User Experience
- **Modern, Professional Design** - Clean and contemporary layout with palm tree branding
- **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations** - Subtle hover effects and scroll animations
- **Accessibility** - Semantic HTML and keyboard navigation support

### Content Sections
- **Hero Section** - Compelling introduction with call-to-action buttons
- **Services Overview** - Detailed presentation of three main service areas:
  - Bespoke Software Development
  - AI & Software Consultancy
  - SaaS Product Development
- **About Company** - Company information with business address and stats
- **Contact Form** - Professional contact form with validation
- **Footer** - Complete company information and navigation links

### Technical Features
- **Mobile-First Design** - Responsive navigation with hamburger menu
- **Form Validation** - Client-side validation with user feedback
- **Smooth Scrolling** - Navigation links with smooth scroll behavior
- **Interactive Elements** - Hover effects, loading states, and notifications
- **SEO Optimized** - Proper meta tags and semantic structure

## 🏢 Company Information

**Palm Tree Tech LLC**
- **Address:** 30 N Gould St Ste R, Sheridan, WY 82801
- **Services:** Bespoke software development, AI consultancy, SaaS products
- **Business Hours:** Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 2:00 PM

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Web server (optional, for production deployment)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For production deployment, upload all files to your web server

### File Structure
```
palm-tree-tech-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Colors
The website uses a green color scheme based on palm tree branding:
- Primary: `#2d5a27` (Dark Green)
- Secondary: `#4a7c59` (Medium Green)
- Background: `#f8f9fa` (Light Gray)

### Content Updates
To update company information:
1. Edit `index.html` for text content
2. Modify `styles.css` for styling changes
3. Update `script.js` for functionality changes

### Contact Form
The contact form currently simulates submission. To connect to a real backend:
1. Replace the form submission logic in `script.js`
2. Add your preferred form handling service (Formspree, Netlify Forms, etc.)
3. Update the success/error handling accordingly

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📧 Contact Form Integration

The website includes a fully functional contact form with:
- Required field validation
- Email format validation
- Loading states
- Success/error notifications
- Form reset after successful submission

To integrate with your preferred service:

### Option 1: Formspree
```javascript
// Replace the form submission in script.js
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});
```

### Option 2: Netlify Forms
Add `netlify` attribute to the form:
```html
<form id="contactForm" netlify>
```

### Option 3: Custom Backend
Replace the form submission logic with your API endpoint.

## 🚀 Deployment

### Static Hosting
The website can be deployed to any static hosting service:
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployment
- **GitHub Pages** - Free hosting for public repositories
- **AWS S3** - Scalable static hosting

### Domain Setup
For professional presentation:
1. Purchase a domain (e.g., `palmtreetech.com`)
2. Configure DNS settings
3. Set up SSL certificate (usually automatic with modern hosting)

## 📈 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta description and title tags
- Proper heading hierarchy
- Alt text for images
- Fast loading times
- Mobile-friendly design

## 🔒 Security Considerations

- Form validation (client-side and server-side recommended)
- HTTPS deployment
- Input sanitization (implement on backend)
- Regular security updates

## 📞 Support

For technical support or customization requests, contact Palm Tree Tech LLC at info@palmtreetech.com.

---

**Palm Tree Tech LLC** - Innovative software solutions for the digital age.
