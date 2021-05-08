let btnRef = document.getElementById('btnId');

// -- debouncing --
let debounce = function(func, delay) {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

let toBeExecuted = () => {
  console.log('Debounce Function');
};

btnRef.addEventListener('click', debounce(toBeExecuted, 2000));
// --------------

let interval = setInterval(() => {
  btnRef.click();
}, 50);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
