/**
 * ==========================================================================
 * CONTROLLER HÍBRIDO INTERACTIVO PREMIUM
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initAppleNavigation();
    initCardTaps();
    initParticleBackground();
});

/**
 * 🍏 SEGUIMIENTO DE PESTAÑAS (Scroll Automático de Apple)
 */
function initAppleNavigation() {
    const tabItems = document.querySelectorAll(".tab-item");
    const sections = document.querySelectorAll("section");

    if (tabItems.length === 0) return;

    tabItems.forEach(item => {
        item.addEventListener("click", function() {
            tabItems.forEach(tab => tab.classList.remove("active"));
            this.classList.add("active");
        });
    });

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                if (section.getAttribute("id")) {
                    currentSectionId = section.getAttribute("id");
                }
            }
        });

        if (currentSectionId) {
            tabItems.forEach(tab => {
                tab.classList.remove("active");
                if (tab.getAttribute("href") === `#${currentSectionId}`) {
                    tab.classList.add("active");
                }
            });
        }
    });
}

/**
 * 📱 MANEJO DE TOQUES EN TARJETA (Simula el Hover de PC en celulares)
 */
function initCardTaps() {
    const cards = document.querySelectorAll('.gallery-card');

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const isActive = card.classList.contains('active-tap');
                cards.forEach(c => c.classList.remove('active-tap'));

                if (!isActive) {
                    e.preventDefault();
                    card.classList.add('active-tap');
                }
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.gallery-card')) {
            cards.forEach(card => card.classList.remove('active-tap'));
        }
    });
}

/**
 * ⚛️ ANIMACIÓN DE PARTÍCULAS CON CONEXIÓN AL MOUSE (Efecto Imán Restaurado)
 */
function initParticleBackground() {
    if (typeof tsParticles === "undefined") return;

    const isMobile = window.innerWidth < 768;

    tsParticles.load({
        id: "tsparticles",
        options: {
            fpsLimit: 60,
            particles: {
                number: {
                    value: isMobile ? 30 : 80,
                    density: { enable: true, area: 800 }
                },
                color: { value: "#007aff" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: { min: 1, max: 3 }, random: true },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#007aff",
                    opacity: 0.15,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: "none",
                    outModes: { default: "out" }
                }
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: !isMobile,
                        mode: "grab" /* Agrupa las líneas dinámicas directamente hacia el cursor */
                    },
                    onClick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 200,
                        links: { opacity: 0.4 }
                    },
                    push: { quantity: 4 }
                }
            },
            detectRetina: true
        }
    });
}
