// script.js
class PortfolioApp {
    constructor() {
        this.currentSection = 'home';
        this.currentTheme = 'professional';
        this.init();
    }

    init() {
        this.loadSavedPreferences();
        this.bindEvents();
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
        });

        // Form submission
        document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(e);
        });
    }

    checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const showThemes = urlParams.get('showThemes');
        
        if (showThemes === 'true' || showThemes === '1') {
            this.toggleThemeSelector(true);
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

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});