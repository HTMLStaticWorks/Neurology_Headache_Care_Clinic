/**
 * Neurology & Headache Care Clinic
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRTL();
    initNavbarSticky();
    initScrollTop();
});

// Theme Management (Dark/Light Mode)
function initTheme() {
    const themeToggles = document.querySelectorAll('#theme-toggle, .theme-toggle-btn');
    if (!themeToggles.length) return;

    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggles.forEach(themeToggle => {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    });
}

// RTL Management
function initRTL() {
    const rtlToggles = document.querySelectorAll('#rtl-toggle, .rtl-toggle-btn');
    if (!rtlToggles.length) return;

    const currentDir = localStorage.getItem('dir') || 'ltr';
    document.documentElement.setAttribute('dir', currentDir);
    
    if (currentDir === 'rtl') {
        document.getElementById('rtl-stylesheet').removeAttribute('disabled');
    } else {
        document.getElementById('rtl-stylesheet').setAttribute('disabled', 'true');
    }

    rtlToggles.forEach(rtlToggle => {
        rtlToggle.addEventListener('click', (e) => {
            e.preventDefault();
            let dir = document.documentElement.getAttribute('dir');
            let newDir = dir === 'rtl' ? 'ltr' : 'rtl';
            
            document.documentElement.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
            
            if (newDir === 'rtl') {
                document.getElementById('rtl-stylesheet').removeAttribute('disabled');
            } else {
                document.getElementById('rtl-stylesheet').setAttribute('disabled', 'true');
            }
        });
    });
}

// Sticky Navbar
function initNavbarSticky() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
}

// Scroll To Top
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Dashboard Offcanvas Auto-close on Mobile
document.addEventListener('DOMContentLoaded', () => {
    const dashboardSidebar = document.getElementById('dashboardSidebar');
    if (dashboardSidebar) {
        const navLinks = dashboardSidebar.querySelectorAll('.nav-link[data-bs-toggle="pill"]');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(dashboardSidebar);
                    if (bsOffcanvas) {
                        bsOffcanvas.hide();
                    }
                }
            });
        });
    }
});
