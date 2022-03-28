import clickOut from "./ClickOut.js"

export default 

function dropMenuDown (){

const dropMenu = document.querySelectorAll('[data-dropdown]')

dropMenu.forEach(menu => {
  ['click', 'touchstart'].forEach(item =>
  menu.addEventListener(item, handleClick))
})



function handleClick (event) {
  event.preventDefault();
  this.classList.add('ativo')

      clickOut(this, ['click', 'touchstart'],() => {
        this.classList.remove('ativo')
    })
  }
}

