console.log('HEllo Calm');

const readyBtn = document.getElementById('ready-btn');
const ready = document.getElementById('ready');
const circle = document.getElementById('circle');
const begin = document.getElementById('begin');

// function start() {
//   // remove ready
//   setTimeout(() => {
//     console.log('Work please');
//     ready.classList.add('disappear');
//     ready.classList.toggle('hidden');
//   }, 2000);
//   // show the begin
//   setTimeout(() => {
//     begin.classList.toggle('hidden');
//   }, 3000);
//   // hide begin
//   setTimeout(() => {
//     begin.classList.toggle('hidden');
//   }, 5000);
//   // show circle
//   setTimeout(() => {
//     circle.classList.toggle('hidden');
//   }, 6000);
// }

// readyBtn.addEventListener('click', start);

function disappear() {
  ready.style.opacity = '0';
  setTimeout(() => {
    ready.style.display = 'none';
  }, 3000);
  setTimeout(() => {
    begin.classList.toggle('hidden');
    begin.style.opacity = 0;
  }, 3000);
  setTimeout(() => {
    begin.style.opacity = 1;
  }, 4500);
  setTimeout(() => {
    begin.style.opacity = 0;
  }, 6000);
  setTimeout(() => {
    begin.classList.toggle('hidden');
    // call the circle animation from here
    circleAnim('hello');
  }, 8000);
}

readyBtn.addEventListener('click', disappear);

// now call the circle with the time parameter...

function circleAnim(time) {
  console.log(time);
  circle.classList.toggle('hidden');
  setTimeout(() => {
    circle.style.opacity = 1;
  }, 2000);
}
