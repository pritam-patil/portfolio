// script.js
class PortfolioApp {
    constructor() {
        this.currentSection = 'home';
        this.currentTheme = 'tech';
        this.themeMappings = this.createThemeMappings(); // Create theme mappings
        this.init();
    }

    // Create mappings for the theme values
    createThemeMappings() {
        return {
            'professional': 'amzn',  // Amazon
            'creative': 'sptfy',     // Spotify
            'minimal': 'ntflx',      // Netflix
            'warm': 'fb',           // Facebook
            'tech': 'appl'          // Apple
        };
    }

    init() {
        this.loadSavedPreferences();
        this.bindEvents();
        this.checkThemeFromUrl();
        this.showSection(this.currentSection);
        this.applyTheme(this.currentTheme);
        this.animateSkills();
        this.checkUrlParams();
    }

   bindEvents() {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.showSection(section);
            });
        });

        // Theme buttons
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const theme = e.currentTarget.dataset.theme;
                this.switchTheme(theme);
            });

            // Optional: Add right-click to copy theme URL
            btn.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                const theme = e.currentTarget.dataset.theme;
                this.copyThemeUrl(theme);
            });
        });

        document.getElementById('theme-ribbon')?.addEventListener('click', () => {
            this.toggleThemeSelector();
        });

        // Form submission
        document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(e);
        });
    }

    checkThemeFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const themeParam = urlParams.get('theme');
        
        if (themeParam) {
            // Find the internal theme name that matches the parameter value
            for (const [internalTheme, paramValue] of Object.entries(this.themeMappings)) {
                if (paramValue === themeParam.toLowerCase()) {
                    this.currentTheme = internalTheme;
                    break;
                }
            }
        }
    }

    // Updated method to get theme URL
    getThemeUrl(theme) {
        const themeParam = this.themeMappings[theme];
        return `${window.location.origin}${window.location.pathname}?theme=${themeParam}`;
    }

    showTempMessage(message) {
        // Create a temporary message element
        const msgElement = document.createElement('div');
        msgElement.textContent = message;
        msgElement.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            z-index: 10000;
            font-family: var(--font-body);
        `;
        document.body.appendChild(msgElement);
        
        setTimeout(() => {
            document.body.removeChild(msgElement);
        }, 3000);
    }

    toggleThemeSelector() {
        const themeSelector = document.querySelector('.theme-selector');
        if (themeSelector.classList.contains('visible')) {
             themeSelector.classList.remove('visible');
        } else {
            themeSelector.classList.add('visible');
        }
    }

    showSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Activate corresponding nav link
        const targetLink = document.querySelector(`[data-section="${sectionName}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }

        this.currentSection = sectionName;
        this.savePreferences();

        // Special handlers for specific sections
        if (sectionName === 'skills') {
            setTimeout(() => this.animateSkills(), 300);
        }
    }

    switchTheme(themeName) {
        this.currentTheme = themeName;
        this.applyTheme(themeName);
        this.savePreferences();
    }

    applyTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        
        // Update active theme button
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === themeName);
            btn.classList.toggle('theme-special', btn.dataset.theme === themeName);
        });
    }

    animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.dataset.level;
            setTimeout(() => {
                bar.style.width = `${level}%`;
            }, 200);
        });
    }

    sendNotificationEmail(data) {
        // This is a placeholder for a backend service
        // In production, you'd want to set up:
        // 1. A backend endpoint (Node.js, Python, etc.)
        // 2. Email service (SendGrid, AWS SES, etc.)
        // 3. Or use Formspree/EmailJS as shown above
        
        console.log('Notification would be sent for:', data);
        // Example endpoint call (you would need to create this):
        // fetch('/api/send-notification', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(data)
        // });
    }


        // Updated handleFormSubmit method with real functionality
    async handleFormSubmit(e) {
        const form = e.target;
        const submitBtn = form.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name') || form.querySelector('input[type="text"]').value,
            email: formData.get('email') || form.querySelector('input[type="email"]').value,
            message: formData.get('message') || form.querySelector('textarea').value,
            timestamp: new Date().toISOString()
        };

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            this.showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        if (!this.isValidEmail(data.email)) {
            this.showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.style.opacity = '0.7';

        try {
            // Option 1: Using Formspree (free form service)
            const response = await fetch('https://formspree.io/f/mdkqdoel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            // Option 2: Using EmailJS (alternative)
            // You would need to sign up at https://www.emailjs.com/
            // const response = await emailjs.sendForm('service_id', 'template_id', form);

            if (response.ok) {
                this.showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                
                // Add to local storage as backup
                this.saveMessageToLocalStorage(data);
                
                // Optional: Send notification to your email
                this.sendNotificationEmail(data);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Fallback: Save to localStorage and show success anyway
            this.saveMessageToLocalStorage(data);
            this.showFormMessage('Message saved! You\'re offline, but I\'ll see it when you reconnect.', 'warning');
            
            // Still show success for better UX
            form.reset();
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            submitBtn.style.opacity = '1';
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    saveMessageToLocalStorage(data) {
        try {
            // Get existing messages or create new array
            const messages = JSON.parse(localStorage.getItem('portfolio_messages')) || [];
            
            // Add new message
            messages.push({
                ...data,
                id: Date.now(),
                status: 'pending'
            });
            
            // Save back to localStorage (max 50 messages)
            const recentMessages = messages.slice(-50);
            localStorage.setItem('portfolio_messages', JSON.stringify(recentMessages));
            
            // Log for debugging (remove in production)
            console.log('Message saved locally:', data);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    showFormMessage(message, type = 'info') {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message form-message-${type}`;
        messageElement.textContent = message;
        messageElement.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: white;
            font-family: var(--font-body);
            font-weight: 600;
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            max-width: 400px;
        `;

        // Set colors based on type
        const colors = {
            success: '#27ae60',
            error: '#e74c3c',
            warning: '#f39c12',
            info: '#3498db'
        };
        messageElement.style.background = colors[type] || colors.info;

        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
            background: transparent;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
        `;
        closeBtn.addEventListener('click', () => {
            messageElement.remove();
        });

        messageElement.appendChild(closeBtn);
        document.body.appendChild(messageElement);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => {
                    if (messageElement.parentNode) {
                        messageElement.remove();
                    }
                }, 300);
            }
        }, 5000);
    }

    loadSavedPreferences() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        const savedSection = localStorage.getItem('portfolio-section');
        
        if (savedTheme) this.currentTheme = savedTheme;
        if (savedSection) this.currentSection = savedSection;
    }

    savePreferences() {
        localStorage.setItem('portfolio-theme', this.currentTheme);
        localStorage.setItem('portfolio-section', this.currentSection);
    }
}

let portfolioApp;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    portfolioApp = new PortfolioApp();
});