const productCard = document.getElementById('product-card');

const addEventListenerList = (list, event, fn) => {
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}
const addClassProductCard = (val) => {
  productCard.classList.add(val);
};
const removeClassProductCard = (val) => {
  productCard.classList.remove(val);
}

document.getElementById('get-order').addEventListener('click', () => addClassProductCard('hidden'), false);
addEventListenerList(document.getElementsByClassName('reco-button'), 'click', () => removeClassProductCard('hidden'));

let currentSize = 'mid-size';
let currentQuality = 'true-quality';
const bigSize = document.getElementById('big-size');
const midSize = document.getElementById('mid-size');
const smallSize = document.getElementById('small-size');
const lightQuality = document.getElementById('light-quality');
const trueQuality = document.getElementById('true-quality');

const sizeToggler = (el, newSize) => {
  el.addEventListener('click', () => {
    removeClassProductCard(currentSize);
    addClassProductCard(newSize);
    currentSize = newSize;
  }, false);
}

const qualityToggler = (el, newQuality) => {
  el.addEventListener('click', () => {
    removeClassProductCard(currentQuality);
    addClassProductCard(newQuality);
    currentQuality = newQuality;
  }, false);
}

sizeToggler(bigSize, 'big-size');
sizeToggler(midSize, 'mid-size');
sizeToggler(smallSize, 'small-size');
qualityToggler(lightQuality, 'light-quality');
qualityToggler(trueQuality, 'true-quality');