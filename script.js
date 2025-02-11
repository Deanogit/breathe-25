console.log('Hello'); // check the js file is connected to the index.html

const intro = document.getElementById('intro'); // grab the intro section
const begin = document.getElementById('begin'); // grab the begin section
const choose = document.getElementById('choose'); // grab the choose section

const beginBtn = document.getElementById('beginBtn'); // grab the intro beginBtn

// Grab the animation states
const calm = document.getElementById('calm');
const clear = document.getElementById('clear');
const relax = document.getElementById('relax');
const relieve = document.getElementById('relieve');

// grab the time elements
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const time3 = document.getElementById('time3');
const time5 = document.getElementById('time5');
const time10 = document.getElementById('time10');

// grab the choice elements
const chooseCalm = document.getElementById('chooseCalm');
const chooseClear = document.getElementById('chooseClear');
const chooseRelax = document.getElementById('chooseRelax');
const chooseRelieve = document.getElementById('chooseRelieve');

// grab the exercise buttons
const calmBtn = document.getElementById('calmBtn');
const clearBtn = document.getElementById('clearBtn');
const relaxBtn = document.getElementById('relaxBtn');
const relieveBtn = document.getElementById('relieveBtn');

// when the intro beginBtn is clicked, hide the intro and show the begin section
beginBtn.addEventListener('click', function () {
  intro.classList.toggle('hidden');
  begin.classList.toggle('hidden');
});

// Store the time in localStorage
function time(e) {
  // when a time element is clicked
  // // check the console its working
  // // console.log(e.target.id);
  // set localStorage time
  localStorage.setItem('time', e.target.id);
  // // check the console its working
  // // console.log(localStorage.getItem('time'));
  // hide the begin section
  begin.classList.toggle('hidden');
  // show the choose section
  choose.classList.toggle('hidden');
}

// set the time function to be called when a time is chosen
time1.addEventListener('click', time);
time2.addEventListener('click', time);
time3.addEventListener('click', time);
time5.addEventListener('click', time);
time10.addEventListener('click', time);

chooseCalm.addEventListener('click', choice);
chooseClear.addEventListener('click', choice);
chooseRelax.addEventListener('click', choice);
chooseRelieve.addEventListener('click', choice);

// set the choice
function choice(e) {
  // // Check its working by printing to the console
  // // console.log('choice');
  // // Check the e.target.id is correct
  // // console.log(e.target.id);
  // hide the choice section
  choose.classList.toggle('hidden');
  //   // store which exercise is chosen
  //   localStorage.setItem('type', e.target.id);
  //   //check its stored correctly
  //   console.log(localStorage.getItem('type'));

  // show the relevant exercise section
  const exercise = e.target.id;
  switch (exercise) {
    case 'chooseCalm':
      calm.classList.toggle('hidden');
      localStorage.setItem('type', 'calm');
      // animate(); // this here can be moved to the calmBtn
      break;
    case 'chooseClear':
      clear.classList.toggle('hidden');
      localStorage.setItem('type', 'clear');
      // animate(); // move to clearBtn
      break;
    case 'chooseRelax':
      relax.classList.toggle('hidden');
      localStorage.setItem('type', 'relax');
      // animate(); // move to relaxBtn
      break;
    case 'chooseRelieve':
      relieve.classList.toggle('hidden');
      localStorage.setItem('type', 'relieve');
      // animate(); // move to relieveBtn
      break;
    default:
      console.log('fault with choice');
  }
}

calmBtn.addEventListener('click', animate);
clearBtn.addEventListener('click', animate);
relaxBtn.addEventListener('click', animate);
relieveBtn.addEventListener('click', animate);

// Initiate the animation for exercise with duration
function animate() {
  // grab the time stored in localStorage
  const time = localStorage.getItem('time');
  console.log(time);
  document
    .getElementById(localStorage.getItem('type'))
    .classList.toggle('hidden');
  // console.log(e.target.id); // uncaught referenceError
  // grab the

  // grab the type of exercise, this isnt relevant atm
  // const type = localStorage.getItem('exercise');
  //console.log('here we go');
  //console.log(time, type);

  // define the duration of practice
  let duration = 0;
  switch (time) {
    case 'time1':
      duration = 60000;
      console.log(duration);
      break;
    case 'time2':
      duration = 120000;
      break;
    case 'time3':
      duration = 180000;
      break;
    case 'time5':
      duration = 300000;
      break;
    case 'time10':
      duration = 600000;
      break;
    default:
      console.log('not working!');
  }
  // console.log(duration);

  // Practice making a countdown timer

  // let finish = new Date().getTime();
  //console.log(finish); // returns 13 digit timestamp

  // Update countdown every 1000 miliseconds
  let x = setInterval(function () {
    duration -= 1000;
    console.log(duration);
    // let now = new Date().getTime();
    // let distance = duration + now;
    // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log(minutes, seconds);
    if (duration < 0) {
      clearInterval(x);
      // hide the animation
      //   document
      //     .getElementById(localStorage.getItem('type'))
      //     .classList.toggle('hidden');
      intro.classList.toggle('hidden');
      localStorage.clear;
    }
  }, 1000);

  // console.log(duration);

  // define the type of practice

  //   let practice;
  //   switch (type) {
  //     case 'chooseCalm':
  //       chooseCalm.classList.toggle('hidden');
  //       break;
  //     default:
  //       console.log('broken');
  //   }
}

// So now the begin section works, the time section works, the choose section works,
// the animation section needs to
// - short animation with "lets begin"
// - delay the countdown considering the duration of "lets begin"
// - take the type of exercise and animate the circle (background also?)
// - show the "Inhale through the nose"
// - if hold, show "hold"
// - show "exhale throuhg the mouth"
// - if hold, show "hold"
// - repeat for duration
// - hide animation
