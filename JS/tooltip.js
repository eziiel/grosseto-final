export default // exportando para o main JavaS
function tooltipS () { //criando a func
const tooltip = document.querySelector('[data-tooltip]')
  //selecionando o que iriei trabalhar
function mouseOn() { 
    //criado func, é ativada L40
  const tooltipBox = criarTooltipBox(this)
    // const recebe o valor da fun L31
  mousemove.tooltipBox = tooltipBox 
  mouseLeave.tooltipBox = tooltipBox
  mouseLeave.element = this
    //linha 9,11 e 11 é craindo valores para regatar em objetos de callback, para assim separar melhor
  this.addEventListener ('mouseleave', mouseLeave)
    // criado um evento em um objeto
  this.addEventListener ('mousemove', mousemove)
    // criado um evento em um objeto
}

const mouseLeave = { // objeto que recebe evento  
  handleEvent() {
    this.tooltipBox.remove()
    this.element.removeEventListener('mouseleave', mouseLeave)
    this.element.removeEventListener('mousemove', mousemove)    
  }
}

const mousemove = {
  handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    this.tooltipBox.style.left = event.pageX + 20 + 'px';
  }
}

function criarTooltipBox () {
  const tooltipBox = document.createElement('div') // crado um elemento
  const texto = tooltip.getAttribute('aria-label') 
  // pego o testo dele do html
  tooltipBox.classList.add('tooltip') // add uma class
  tooltipBox.innerText = texto // recuperando o texto
  document.body.appendChild(tooltipBox) 
  // adicionando ele ao final do body
  return tooltipBox
  //retornando o mesmo criado
}

tooltip.addEventListener('mouseover', mouseOn)

}