
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  const body = document.querySelector('body');
  let timerId = null;



  startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disable = true;
    stopBtn.disable = false;
  });


  stopBtn.addEventListener('click', () => {

    startBtn.disable = false;
    stopBtn.disable = true;
    clearInterval(timerId);
    
  });
