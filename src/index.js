import './less/index.less'

// Your code goes here!
const bunFus = document.querySelector('h1')
bunFus.addEventListener("mouseover", (evt) =>{
    evt.target.textContent = 'Bloom Bus'
});
bunFus.addEventListener("mouseleave", (evt) =>{
    evt.target.textContent = 'Fun Bus'
});
document.addEventListener('keydown', function (evt) {
    if (evt.key === 'y') {
      document.body.style = " background-color: yellow";
    }
    if (evt.key === 'Escape') {
      document.body.style = '';
    }
  });
  function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}
let scale = 0.5;
  const el = document.querySelector('img');
  el.onwheel = zoom;
  window.onload = function() {
    document.body.style = " background-color: blue";

};
const  elem = document.querySelector(".home container")
elem.addEventListener('focus', (evt) =>{
    evt.target.style = 'background-color: pink';
}, true);