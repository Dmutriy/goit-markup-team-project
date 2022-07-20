// Header

(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-header-open]'),
    closeModalBtn: document.querySelector('[data-header-close]'),
    modal: document.querySelector('[data-header-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.forEach(item =>
    item.addEventListener('click', toggleModal)
  );
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-cone-open]'),
//     closeModalBtn: document.querySelector('[data-modal-cone-close]'),
//     modal: document.querySelector('[data-cone-modal]'),
//     body: document.querySelector('body'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

// About

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// Products-cone

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-cone-open]'),
    closeModalBtn: document.querySelector('[data-modal-cone-close]'),
    modal: document.querySelector('[data-cone-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// Products-coffee

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-coffee-open]'),
    closeModalBtn: document.querySelector('[data-modal-coffee-close]'),
    modal: document.querySelector('[data-coffee-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// Products-milkshake

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-milkshake-open]'),
    closeModalBtn: document.querySelector('[data-modal-milkshake-close]'),
    modal: document.querySelector('[data-milkshake-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// popup

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