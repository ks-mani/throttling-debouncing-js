let btnRef = document.getElementById('btnId');

// -- throttling --
let throttle = function(func, delay) {
  let timer = null;
  return () => {
    if (timer) return;

    timer = setTimeout(() => {
      func();
      timer = null;
    }, delay);
  };
};

let toBeExecuted = () => {
  console.log('Throttled Function');
};

btnRef.addEventListener('click', throttle(toBeExecuted, 500));
// --------------

let interval = setInterval(() => {
  btnRef.click();
}, 5);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
