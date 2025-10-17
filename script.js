document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para os links da navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Ajuste para o header fixo de 80px
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de fade-in para as seções
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Animação do avião ao rolar
    const plane = document.getElementById('animated-plane');
    if (plane) {
        window.addEventListener('scroll', () => {
            let scrollPosition = window.scrollY;
            // Move o avião para cima e para a esquerda conforme o usuário rola a página
            plane.style.transform = `translateX(${-150 - scrollPosition * 0.5}px) translateY(${-scrollPosition * 0.3}px) rotate(${-scrollPosition * 0.05}deg)`;
        });
    }
});
