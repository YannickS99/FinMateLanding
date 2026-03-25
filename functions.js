// ===== Multi-Language Support Configuration =====
const translations = {
    en: {
        "nav.features": "Features",
        "nav.preview": "Preview",
        "nav.download": "Download",
        "nav.comingSoon": "Coming soon",
        "hero.badge": "Coming soon to the App Store",
        "hero.title1": "Your finances.",
        "hero.title2": "Under control.",
        "hero.subtitle": "Track your expenses, set savings goals, and get insights into your financial health with Monetheus.",
        "cta.main": "Coming Soon",
        "cta.learnMore": "Learn more",
        "hero.scroll": "Scroll",
        "features.badge": "Features",
        "features.title1": "Everything you need.",
        "features.title2": "Nothing you don’t.",
        "features.f1.title": "Transactions",
        "features.f1.desc": "Track one-time and recurring income and expenses. Your monthly budget always at a glance.",
        "features.f2.title": "Budget Overview",
        "features.f2.desc": "See instantly what comes in, what goes out, and what remains at the end of the month. Clear overview, no guessing.",
        "features.f3.title": "Statistics",
        "features.f3.desc": "Category distribution, trends, and your monthly savings rate – all visualized.",
        "features.f4.title": "Savings Goals",
        "features.f4.desc": "Set savings goals – Monetheus automatically calculates your monthly potential and progress.",
        "features.f5.title": "Widgets & Reminders",
        "features.f5.desc": "Your budget directly on your home screen. Reminders make sure no transaction is forgotten.",
        "features.f6.title": "Backup & Export",
        "features.f6.desc": "Export and import your data as JSON files anytime. Full control over your data – completely local, no cloud needed.",
        "preview.badge": "Preview",
        "preview.title1": "Designed for",
        "preview.title2": "Overview.",
        "preview.p1": "Saving Goals",
        "preview.p2": "Statistics",
        "preview.p3": "Widgets",
        "download.title": "Coming soon.",
        "download.desc": "Monetheus will be available soon in the App Store.",
        "footer.rights": "All rights reserved.",
        "footer.privacy": "Privacy",
        "footer.legal": "Legal Notice"
    },
    de: {
        "nav.features": "Funktionen",
        "nav.preview": "Vorschau",
        "nav.download": "Download",
        "nav.comingSoon": "Demnächst",
        "hero.badge": "Demnächst im App Store",
        "hero.title1": "Deine Finanzen.",
        "hero.title2": "Im Griff.",
        "hero.subtitle": "Verfolge deine Ausgaben, setze Sparziele und erhalte Einblicke in deine finanzielle Gesundheit mit Monetheus.",
        "cta.main": "Demnächst",
        "cta.learnMore": "Mehr erfahren",
        "hero.scroll": "Scrollen",
        "features.badge": "Funktionen",
        "features.title1": "Alles was du brauchst.",
        "features.title2": "Nichts was du nicht brauchst.",
        "features.f1.title": "Transaktionen",
        "features.f1.desc": "Erfasse einmalige und wiederkehrende Einnahmen und Ausgaben. Dein Monatsbudget immer im Blick.",
        "features.f2.title": "Budget-Übersicht",
        "features.f2.desc": "Sieh sofort, was reinkommt, was rausgeht und was am Ende des Monats übrig bleibt. Klarheit statt Raten.",
        "features.f3.title": "Statistiken",
        "features.f3.desc": "Kategorienverteilung, Trends und deine monatliche Sparquote – alles visualisiert.",
        "features.f4.title": "Sparziele",
        "features.f4.desc": "Setze Sparziele – Monetheus berechnet automatisch dein monatliches Potenzial und den Fortschritt.",
        "features.f5.title": "Widgets & Erinnerungen",
        "features.f5.desc": "Dein Budget direkt auf dem Homescreen. Erinnerungen sorgen dafür, dass keine Buchung vergessen wird.",
        "features.f6.title": "Backup & Export",
        "features.f6.desc": "Exportiere und importiere deine Daten jederzeit als JSON-Dateien. Volle Kontrolle über deine Daten – komplett lokal, keine Cloud nötig.",
        "preview.badge": "Vorschau",
        "preview.title1": "Designet für den",
        "preview.title2": "Überblick.",
        "preview.p1": "Sparziele",
        "preview.p2": "Statistiken",
        "preview.p3": "Widgets",
        "download.title": "Bald verfügbar.",
        "download.desc": "Monetheus wird in Kürze im App Store erhältlich sein.",
        "footer.rights": "Alle Rechte vorbehalten.",
        "footer.privacy": "Datenschutz",
        "footer.legal": "Impressum"
    }
};

let currentLang = 'EN';

function updateLanguage(lang) {
    const langData = translations[lang.toLowerCase()];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) el.innerText = langData[key];
    });
    
    // Update App Store Badge path if needed
    const appStoreImg = document.getElementById('appStoreImg');
    if (appStoreImg) {
        appStoreImg.src = lang === 'DE' ? 'assets/app-store-de.png' : 'assets/appstore_en.png'; 
    }

    document.getElementById('langToggle').innerText = lang;
    document.documentElement.lang = lang.toLowerCase();
}

// ===== Core Logic & Animations =====
document.addEventListener('DOMContentLoaded', () => {

    // --- Language Toggle Setup ---
const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        // Initialer Zustand: Seite ist Englisch, Button zeigt "DE"
        currentLang = 'EN'; 
        langBtn.innerText = 'DE'; 

        langBtn.addEventListener('click', () => {
            if (currentLang === 'EN') {
                currentLang = 'DE';
                updateLanguage('DE');
                langBtn.innerText = 'EN'; // Zeige EN an, um zurückzuwechseln
            } else {
                currentLang = 'EN';
                updateLanguage('EN');
                langBtn.innerText = 'DE'; // Zeige DE an, um auf Deutsch zu wechseln
            }
        });
    }

    // --- Scroll Reveal ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });
    revealElements.forEach(el => revealObserver.observe(el));

    // --- Navbar Background on Scroll ---
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-gray-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
        } else {
            navbar.classList.remove('bg-gray-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Hero Phone Parallax ---
    const heroPhone = document.querySelector('.fade-up[style*="0.5s"]');
    if (heroPhone) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                heroPhone.style.transform = `translateY(${scrollY * 0.15}px)`;
            }
        }, { passive: true });
    }

    // --- Feature Card Tilt Effect ---
    const featureCards = document.querySelectorAll('.feature-card > div');
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
            const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
            card.style.transition = 'transform 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });
});