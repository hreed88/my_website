// Landing Page Interactive Effects

// Add some interactive mouse movement to shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add click effect to the title
document.querySelector('.fun-title').addEventListener('click', function() {
    this.style.animation = 'none';
    this.offsetHeight; // Trigger reflow
    this.style.animation = 'glow 2s ease-in-out infinite alternate';
});

// Add hover effect to buttons
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add some random movement to shapes
setInterval(() => {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        const randomX = (Math.random() - 0.5) * 10;
        const randomY = (Math.random() - 0.5) * 10;
        shape.style.transform += ` translate(${randomX}px, ${randomY}px)`;
    });
}, 3000);

// Add typing effect to subtitle
const subtitle = document.querySelector('.subtitle');
const originalText = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        subtitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all scroll-to elements
    const scrollToProjects = document.querySelectorAll('.scroll-to-projects');
    const scrollToTop = document.querySelectorAll('.scroll-to-top');

    scrollToProjects.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    scrollToTop.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Add scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progressBar);

        // Add CSS for progress bar
        const style = document.createElement('style');
        style.textContent = `
            .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: rgba(255, 255, 255, 0.1);
                z-index: 9999;
            }
            .scroll-progress-bar {
                height: 100%;
                background: linear-gradient(90deg, #4ade80, #22c55e);
                width: 0%;
                transition: width 0.3s ease;
            }
        `;
        document.head.appendChild(style);

        return progressBar.querySelector('.scroll-progress-bar');
    };

    const progressBar = createScrollProgress();

    // Update progress bar on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe project elements for animation
    document.querySelectorAll('.sprint-item, .tech-stack, .database-section, .setup-section').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Add CSS for fade in animation
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(animationStyle);

    // Add parallax effect to floating shapes in projects section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            element.style.transform += ` translateY(${scrolled * speed * 0.1}px)`;
        });
    });

    // Enhanced tech tag hover effects
    document.querySelectorAll('.tech-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Add click effect to demo gifs
    document.querySelectorAll('.demo-gif').forEach(gif => {
        gif.addEventListener('click', function() {
            // Create modal to show full-size gif
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                cursor: pointer;
            `;
            
            const fullGif = this.cloneNode();
            fullGif.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 15px;';
            
            modal.appendChild(fullGif);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});
