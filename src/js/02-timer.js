
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('[data-start]');


const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
   
};

btnEl.disabled = true;

let timeDiff = 0;
let timerId = null;
let selectedDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate = selectedDates[0];

      if (selectedDates[0] < new Date()) {
        window.alert(`Please choose a date in the future`);
        return
      } else {
        btnEl.disabled = false;
      }
    },
  };


  flatpickr(inputEl, options);

  const btnClick = () => {
    timerId = setInterval(() => {
        timeDiff = selectedDate - new Date();
        console.log(timeDiff);
        refs.days.textContent = convertMs(timeDiff).days;
        refs.hours.textContent = convertMs(timeDiff).hours;
        refs.minutes.textContent = convertMs(timeDiff).minutes;
        refs.seconds.textContent = convertMs(timeDiff).seconds;

        if (timeDiff <= 1000) {
            clearInterval(timerId);
        }
    }, 1000);

    
  }

btnEl.addEventListener('click', btnClick);
    

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}