document.addEventListener('DOMContentLoaded', function () {
    const modalTriggers = document.querySelectorAll('.ver-mas');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    window.addEventListener('click', function (e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
