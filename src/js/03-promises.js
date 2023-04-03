import Notiflix from 'notiflix';

refs = {
  form: document.querySelector('.form'),
  delayInput: document.getElementsByName('delay'),
  stepInput: document.getElementsByName('step'),
  amountInput: document.getElementsByName('amount'),
  submitBtn: document.querySelector('.button'),

};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.prevent.Default();

   let delay = Number(refs.delayInput.value);
   const step = Number(refs.stepInput.value);
   const amount = Number(refs.amountInput.value);

   for (let position=1; position <= amount; position+=1) {

 createPromise (position, delay)
 .then(resolve => Notiflix.Notify.success(resolve))
    
  .catch(reject => Notiflix.Notify.failure(reject));
    delay += step;
   }

  refs.form.reset();
}

function createPromise(position, delay) {
 
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
  
   
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }
})
}, delay)
}
