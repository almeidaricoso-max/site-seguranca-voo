document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para os links da navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Ajuste para o header fixo de 70px
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação do avião ao rolar a página
    const plane = document.getElementById('animated-plane');
    if (plane) {
        // Guardar a posição inicial para o cálculo do movimento
        const initialPlaneX = -150; // Posição final da animação fly-in

        window.addEventListener('scroll', () => {
            let scrollPosition = window.scrollY;
            // Efeito sutil de movimento ao rolar
            plane.style.transform = `translateX(${initialPlaneX - scrollPosition * 0.2}px) translateY(${-scrollPosition * 0.1}px) rotate(${-scrollPosition * 0.02}deg)`;
        });
    }
});
