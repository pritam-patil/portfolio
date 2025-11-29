// script.js
class PortfolioApp {
    constructor() {
        this.currentSection = 'home';
        this.currentTheme = 'professional';
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

    checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const showThemes = urlParams.get('showThemes');
        
        if (showThemes === 'true' || showThemes === '1') {
            this.toggleThemeSelector(true);
            this.displayThemeUrls(); // Show theme URLs if selector is visible
        }

        // Log available theme URLs
        this.logThemeUrls();
    }

     logThemeUrls() {
        console.log('Available theme URLs:');
        for (const [theme, param] of Object.entries(this.themeMappings)) {
            const url = this.getThemeUrl(theme);
            console.log(`${theme} (${param}): ${url}`);
        }
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

    displayThemeUrls() {
        const container = document.querySelector('.theme-urls');
        const list = document.getElementById('theme-urls-list');
        
        if (container && list) {
            container.style.display = 'block';
            list.innerHTML = '';
            
            for (const [theme, param] of Object.entries(this.themeMappings)) {
                const url = this.getThemeUrl(theme);
                const themeElement = document.createElement('div');
                themeElement.style.marginBottom = '0.5rem';
                themeElement.innerHTML = `
                    <strong>${theme}:</strong> 
                    <a href="${url}" target="_blank" style="color: var(--secondary-color);">?theme=${param}</a>
                    <button onclick="portfolioApp.copyThemeUrl('${theme}')" 
                            style="margin-left: 0.5rem; padding: 0.2rem 0.5rem; background: var(--accent-color); color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 0.7rem;">
                        Copy
                    </button>
                `;
                list.appendChild(themeElement);
            }
        }
    }

    toggleThemeSelector(show) {
        const themeSelector = document.querySelector('.theme-selector');
        if (themeSelector) {
            if (show) {
                themeSelector.classList.add('visible');
            } else {
                themeSelector.classList.remove('visible');
            }
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

    handleFormSubmit(e) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        e.target.reset();
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