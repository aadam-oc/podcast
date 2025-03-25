document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.evento-card');

    const appearOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('appear');
            }
        });
    };

    window.addEventListener('scroll', appearOnScroll);
    appearOnScroll(); 
});