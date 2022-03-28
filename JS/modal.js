export default 
  function initModal() {
    const abrir = document.querySelector('[data-entrar="entrar"]')
    const modal =document.querySelector('.modal-container')
    const fechar = document.querySelector('[data-fechar="fechar"]')
   
    function toggleModal (event) {
      event.preventDefault();
      modal.classList.toggle('ativo')
  }
  if (abrir && modal && fechar) {
  var cliqueFora = (event) => {
    if(event.target === modal)  
    toggleModal(event)
  }
  abrir.addEventListener('click', toggleModal)
  fechar.addEventListener('click', toggleModal)
  modal.addEventListener('click', cliqueFora)
}}