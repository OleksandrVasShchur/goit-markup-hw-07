(() => {
    const refs = {
      openModalBtn: document.querySelector("[click-modal-open]"),
      closeModalBtn: document.querySelector("[click-modal-close]"),
      modal: document.querySelector("[full-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
    }
  })();
