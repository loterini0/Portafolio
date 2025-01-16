// Destacar sección activa
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

// Animación al cargar la página
window.addEventListener("load", () => {
    const title = document.querySelector(".title");
    title.style.transform = "translateY(0)";
    title.style.opacity = "1";
});
