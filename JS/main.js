import Modal from "./modal.js";
import tooltip from "./tooltip.js";
import dropMenu from "./dropMenu.js";
import dropMenuProd from "./dropMenuProd.js";
// import btnNatal from "./btnNatal.js"

const modal = new Modal(
  "[data-entrar='entrar']",
  ".modal-container",
  "[data-fechar='fechar']",
);

modal.init();


tooltip();
dropMenu();
dropMenuProd();
// btnNatal()
