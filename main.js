const ready = () => {
    const header = document.querySelector('.site-header');
    const reveals = document.querySelectorAll('[data-reveal]');
    const toggles = document.querySelectorAll('[data-toggle="detail"]');
    const yearSlot = document.getElementById('year');
    const scrollButtons = document.querySelectorAll('[data-scroll]');

    if (yearSlot) {
        yearSlot.textContent = new Date().getFullYear();
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.25 }
    );

    reveals.forEach((el) => {
        const delay = el.getAttribute('data-reveal-delay');
        if (delay) {
            el.style.transitionDelay = delay;
        }
        observer.observe(el);
    });

    toggles.forEach((button) => {
        button.addEventListener('click', () => {
            const detail = button.previousElementSibling;
            if (!detail) {
                return;
            }
            const isHidden = detail.hasAttribute('hidden');
            if (isHidden) {
                detail.removeAttribute('hidden');
            } else {
                detail.setAttribute('hidden', '');
            }
            button.setAttribute('aria-expanded', String(isHidden));
            button.textContent = isHidden ? 'Hide breakdown' : 'View breakdown';
        });
    });

    scrollButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const target = document.querySelector(button.getAttribute('data-scroll'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const handleScroll = () => {
        if (!header) {
            return;
        }
        header.classList.toggle('scrolled', window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

