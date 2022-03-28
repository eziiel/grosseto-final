export default 
  //dmp = dropMenuProdutos

  // esse eu manterei o hover do css para MOUSE e aplicarei o JS apenas no evento touch
function dropProd () {

  const dmp = document.querySelector('[data-dropprodutos]')


  function menuProd (event) {
    event.preventDefault()
      if(event.type == 'touchstart') {
        this.classList.add('ativo');

      dropProdutos (this, () => {
        this.classList.remove('ativo')
      })
    }}


  function dropProdutos (element, callback) {
    const html = document.documentElement
    const clique = 'data-click'  

    if(!element.hasAttribute(clique)) {
      html.addEventListener('touchstart', touchOut)
      element.setAttribute(clique, '')
    }

    function touchOut (event) {
      if(!element.contains(event.target)) {
        element.removeAttribute(clique)
        html.removeEventListener('touchstart', touchOut)
       callback()
      }
     
    }
  }

  ['click', 'touchstart'].forEach(item => 
  dmp.addEventListener(item, menuProd))

}