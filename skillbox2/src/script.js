const isElectron = navigator.userAgent.indexOf('Electron') !== -1;
// function changeContainer() {
//   const containerActive = document.querySelector(".js-container.is-active");
//   const containerInactive = document.querySelector(
//     ".js-container:not(.is-active)"
//   );

//   containerActive.classList.remove("is-active");
//   containerInactive.classList.add("is-active");
// }
const button2 = document.getElementById('code');
function go(){
  const containerActive = document.querySelector(".js-container.is-active");
  const containerInactive = document.querySelector(
    ".js-container:not(.is-active)"
  );
  containerActive.classList.remove("is-active");
  containerInactive.classList.add("is-active");
}

button2.onclick=go;

function resetApp() {
  inputTicket.value = "";
}

const form = document.getElementById("form");

const inputTicket = document.getElementById("inputTicket");

form.onsubmit = (event) => {
  event.preventDefault();
  // changeContainer();
  setTimeout(resetApp, 463);
};

const resetBtn = document.getElementById("reset");
// resetBtn.onclick = changeContainer;
if (isElectron) {
  document.body.classList.add('electron');
  alert('halo marsaine!!!')
}
