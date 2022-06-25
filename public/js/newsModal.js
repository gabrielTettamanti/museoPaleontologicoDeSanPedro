const modal = document.getElementById('news-modal');

modal.addEventListener('show.bs.modal', () => {
    /* Button that triggered the modal */
    const button = event.relatedTarget
    /* Get the new´s title from the data-bs-title attribute */
    const title = button.getAttribute('data-bs-title');
    /* Get the new´s content from the data-bs-title attribute */
    const content = button.getAttribute('data-bs-content');

    /* Get the modal´s title */
    const modalTitle = modal.querySelector('.modal-title');
    /* Set the new´s title to the modal´s title */
    modalTitle.textContent = title;

    /* Get the modal´s content */
    const modalContent = modal.querySelector('.news-content');
    /* Set the new´s content to the modal´s content */
    modalContent.textContent = content;
});