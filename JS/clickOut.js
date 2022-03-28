export default function clickOut(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  //
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, fecharMenu);
    });
    element.setAttribute(outside, "");
  }
  //
  function fecharMenu(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, fecharMenu);
      });
      callback();
    }
  }
}