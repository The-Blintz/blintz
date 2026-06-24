// Motor de Partículas Inteligentes en Alta Tasa de Refresco
tsParticles.load("tsparticles", {
    fpsLimit: 120,
    particles: {
        number: {
            value: 75,
            density: { enable: true, area: 900 }
        },
        color: { value: "#0ed5c0" },
        shape: { type: "circle" },
        opacity: {
            value: 0.25,
            random: true
        },
        size: {
            value: { min: 1, max: 3.5 }
        },
        links: {
            enable: true,
            distance: 140,
            color: "#0ed5c0",
            opacity: 0.15,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "out" }
        }
    },
    interactivity: {
        detectsOn: "window",
        events: {
            onHover: {
                enable: true,
                mode: "grab" // Las líneas se anclan interactivamente al puntero del mouse
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 180,
                links: { opacity: 0.55 }
            }
        }
    },
    background: { color: "transparent" }
});
