export default class Modal {
  constructor(abrirModal, modalM, fecharModal) {
    this.abrir = document.querySelector(abrirModal);
    this.modal = document.querySelector(modalM);
    this.fechar = document.querySelector(fecharModal);

    this.toggleModal = this.toggleModal.bind(this)
    this.verificar = this.verificar.bind(this)
  }

  toggleModal(event) {
    event.preventDefault();
    this.modal.classList.toggle("ativo");
  }
  cliqueFora = (event) => {
    if (event.target === this.modal) this.toggleModal(event);
  };
  verificar(event) {
    if (this.abrir && this.modal && this.fechar) {
      this.cliqueFora(event);
    }
  }
  init() {
    this.abrir.addEventListener("click", this.toggleModal);
    this.fechar.addEventListener("click", this.toggleModal);
    this.modal.addEventListener("click", this.verificar);
    return this;
  }
}
