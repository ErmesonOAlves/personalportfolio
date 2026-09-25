document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link, .nav-cta');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }, index * 100);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    let rafId = null;
    const cards = document.querySelectorAll('.premium-card');
    const magneticElements = document.querySelectorAll('.magnetic');

    const updateMouseEffects = (e) => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right && 
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            }
        });

        magneticElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
            
            if (distance < 200) {
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;
                el.style.transform = `translate(${distanceX * 0.15}px, ${distanceY * 0.15}px)`;
            } else {
                el.style.transform = `translate(0px, 0px)`;
            }
        });
        
        rafId = null;
    };

    window.addEventListener('mousemove', (e) => {
        if (!rafId) {
            rafId = requestAnimationFrame(() => updateMouseEffects(e));
        }
    }, { passive: true });

    document.addEventListener('mousedown', (e) => {
        const target = e.target.closest('.nav-cta, .premium-card');
        if (target) target.style.transform += ' scale(0.98)';
    });

    document.addEventListener('mouseup', (e) => {
        const target = e.target.closest('.nav-cta, .premium-card');
        if (target) target.style.transform = target.style.transform.replace(' scale(0.98)', '');
    });
});
