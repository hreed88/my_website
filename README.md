# Harrison Reed - Personal Website

A modern, responsive personal website built with Node.js, featuring a fun landing page and a professional about section.

## 🚀 **Features**

- **Fun Landing Page**: Animated background with "harrison.fun" branding
- **Professional About Page**: Complete resume information with vertical navigation
- **Node.js Server**: Custom HTTP server for serving static files
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional design with smooth animations

## 📁 **Project Structure**

```
my_website/
├── server.js                    # Node.js HTTP server
├── package.json                 # Project configuration
├── README.md                    # This file
├── images/
│   └── profile.jpg             # Profile picture
└── pages/
    ├── landing/                 # Fun landing page
    │   ├── index.html          # Landing page HTML
    │   ├── landing.css         # Landing page styles
    │   └── landing.js          # Landing page interactions
    └── about/                   # Professional about page
        ├── about.html          # About page HTML
        ├── styles.css          # About page styles
        └── main.js             # About page functionality
```

## 🎯 **Pages**

### **Landing Page (`/` or `/landing`)**
- **Fun animated background** with shifting gradients
- **"harrison.fun" branding** with Orbitron font
- **Floating animated shapes** that respond to mouse movement
- **Interactive buttons** linking to the about page
- **Typing effects** and smooth animations

### **About Page (`/about`)**
- **Complete professional information** from resume
- **Vertical right-side navigation** with section highlighting
- **Responsive timeline** for work experience
- **Skills showcase** with categorized tags
- **Contact form** and professional details

## 🛠️ **Technologies Used**

- **Backend**: Node.js with custom HTTP server
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Inter (professional), Orbitron (fun)
- **Icons**: Font Awesome
- **Animations**: CSS animations and JavaScript interactions

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (version 14.0.0 or higher)

### **Installation & Running**

1. **Clone or download** the project files
2. **Navigate** to the project directory:
   ```bash
   cd my_website
   ```
3. **Start the server**:
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

### **Access Your Website**
- **Landing Page**: `http://127.0.0.1:3000/` or `http://localhost:3000/`
- **About Page**: `http://127.0.0.1:3000/about`
- **Direct Landing**: `http://127.0.0.1:3000/landing`

## ⚙️ **Server Features**

- **Static file serving** with proper MIME types
- **Automatic routing** for main pages
- **Error handling** (404, 500 errors)
- **Port 3000** by default (easily configurable)

## 🎨 **Customization**

### **Landing Page**
- Update colors in `pages/landing/landing.css`
- Modify animations in `pages/landing/landing.js`
- Change text content in `pages/landing/index.html`

### **About Page**
- Update professional information in `pages/about/about.html`
- Modify styles in `pages/about/styles.css`
- Adjust navigation behavior in `pages/about/main.js`

### **Profile Image**
- Replace `images/profile.jpg` with your own photo
- Image will automatically be styled with circular frame and shadow

## 📱 **Responsive Design**

- **Mobile-first approach** with progressive enhancement
- **Breakpoints** at 768px and 480px
- **Touch-friendly** navigation and interactions
- **Optimized** for all screen sizes

## 🔧 **Development**

### **File Organization**
- **Separation of concerns** with dedicated folders for each page
- **Modular CSS** and JavaScript files
- **Easy to maintain** and extend

### **Adding New Pages**
1. Create a new folder in `pages/`
2. Add HTML, CSS, and JS files
3. Update `server.js` with new routing
4. Update navigation links

## 🌐 **Deployment**

The website is ready to deploy to any Node.js hosting service:
- **Heroku**
- **Vercel**
- **Railway**
- **DigitalOcean**
- **AWS EC2**

## 📄 **License**

MIT License - feel free to use and modify as needed.

## 🤝 **Support**

If you need help customizing the website or have questions about the code structure, the modular organization makes it easy to modify individual components without affecting others.
