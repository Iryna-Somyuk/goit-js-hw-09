const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');


btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

let idBgColor = null;

function onStart() {
   idBgColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
}


function onStop() {
    clearInterval(idBgColor);
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');
};
    

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
