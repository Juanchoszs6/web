document.addEventListener('DOMContentLoaded', function () {
    function toggleMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('show');
    }

    function closeMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.remove('show');
    }

    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMobileMenu);

    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeMobileMenu);

    // Lógica para abrir y cerrar ventanas modales
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'none';
        });
    });

    // Cerrar el modal si se hace clic fuera de su contenido
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
