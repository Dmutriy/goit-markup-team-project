(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-popup-open]'),
    closeModalBtn: document.querySelector('[data-popup-close]'),
    modal: document.querySelector('[data-popup]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
