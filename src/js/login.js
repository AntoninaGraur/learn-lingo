(() => {
  const refs = {
    openLoginBtn: document.querySelector('[data-login-open]'),
    closeLoginBtn: document.querySelector('[data-login-close]'),
    modal: document.querySelector('[data-form]'),
  };

  refs.openLoginBtn.addEventListener('click', toggleModal);
  refs.closeLoginBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('login-is-hidden');
  }
})();
