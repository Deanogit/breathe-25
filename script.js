console.log('Hello'); // check the js file is connected to the index.html

const intro = document.getElementById('intro'); // grab the intro section
const begin = document.getElementById('begin'); // grab the begin section
const choose = document.getElementById('choose'); // grab the choose section

const beginBtn = document.getElementById('begin-btn'); // grab the intro beginBtn

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
const chooseCalm = document.getElementById('choose-calm');
const chooseClear = document.getElementById('choose-clear');
const chooseRelax = document.getElementById('choose-relax');
const chooseRelieve = document.getElementById('choose-relieve');

// grab the exercise buttons
const calmBtn = document.getElementById('calm-btn');
const clearBtn = document.getElementById('clear-btn');
const relaxBtn = document.getElementById('relax-btn');
const relieveBtn = document.getElementById('relieve-btn');

// grab the lets-begin section
const letsBegin = document.getElementById('lets-begin');

// grab the circle section
const circle = document.getElementById('circle');

// grab the bar, inhale, hold & exhale divs
const bar = document.getElementById('bar');
const inhale = document.getElementById('inhale');
const hold1 = document.getElementById('hold1');
const holdText = document.getElementById('hold-text');
const exhale = document.getElementById('exhale');

// grab the timer & timer countdown
const timer = document.getElementById('timer');
const timerCountdown = document.getElementById('timer-countdown');

// when the intro beginBtn is clicked, hide the intro and show the begin section
beginBtn.addEventListener('click', function () {
  hide(intro);
  show(begin);
});

// Store the duration &
const store = {};
// Store the time

function time(e) {
  // console.log(e.target.dataset.time); test
  store.time = e.target.dataset.time;
  console.log(store.time);
  // hide begin
  hide(begin);
  // show choose
  show(choose);
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
  // hide the choice section
  hide(choose);
  //   // store which exercise is chosen
  store.type = e.target.dataset.type;
  // check its stored correctly
  console.log(store.type);

  // show relevant section
  show(document.getElementById(store.type));
}

// Now the relevant exercise description is showing, listen to the button to initiate the animation
// but how to listen to the buttons... hard code or use the store.type

calmBtn.addEventListener('click', animate);
clearBtn.addEventListener('click', animate);
relaxBtn.addEventListener('click', animate);
relieveBtn.addEventListener('click', animate);

// Initiate the animation for exercise with duration
function animate() {
  let duration = store.time * 1000;
  console.log(duration);
  // hide the relevant section
  hide(document.getElementById(store.type));

  // show lets-begin
  show(letsBegin);
  // hide lets-begin & show circle
  setTimeout(() => {
    // hide letsBegin
    hide(letsBegin);
    // show circle
    show(circle);
  }, 3000);

  setTimeout(() => {
    // show
    show(bar);
    show(inhale);
    show(exhale);
    show(hold1);

    // use a switch statement to define which animation get applied
    switch (store.type) {
      case 'calm':
        inhale.style.cssText = `
            animation: calmInhale 10s infinite`;
        exhale.style.cssText = `
            animation: calmExhale 10s infinite`;
        bar.style.cssText = `
            animation: calmBar 10s infinite`;
        break;
      case 'clear':
        inhale.style.cssText = `
                animation: clearInhale 8s infinite`;
        exhale.style.cssText = `
                animation: clearExhale 8s infinite`;
        bar.style.cssText = `
                animation: clearBar 8s infinite;
                `;
        break;
      case 'relax':
        inhale.style.cssText = `
                    animation: relaxInhale 19s infinite`;
        exhale.style.cssText = `
                    animation: relaxExhale 19s infinite`;
        hold1.style.cssText = `
                    animation: relaxHold 19s infinite`;
        holdText.textContent = 'Hold for 7 seconds';
        bar.style.cssText = `
                    animation: relaxBar 19s infinite;
                    
                    `;
        break;
      case 'relieve':
        inhale.style.cssText = `
                        animation: relieveInhale 16s infinite`;
        exhale.style.cssText = `
                        animation: relieveExhale 16s infinite`;
        hold1.style.cssText = `
                        animation: relieveHold 16s infinite`;
        holdText.textContent = 'Hold for 4 seconds';
        bar.style.cssText = `
                        animation: relieveBar 16s infinite;  
                        `;
        break;
      default:
        console.log('broken');
    }

    let durationCounter = setInterval(() => {
      duration = duration - 1000;
      console.log(duration);
      let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((duration % (1000 * 60)) / 1000);
      // can i implement the seconds to render 00:01 when less than 10s?
      timerCountdown.textContent = `${minutes}:${seconds}`;
      if (duration <= 0) {
        // stop the counter
        clearInterval(durationCounter);
        console.log('HEEEllooo');
        // hide
        // can these fade out?
        hide(bar);
        hide(inhale);
        hide(exhale);
        hide(hold1);
        hide(circle);
        // show
        show(end);
        setTimeout(() => {
          hide(end);
          show(intro);
        }, 3000);
      }
    }, 1000);
  }, 3500);
}

//////////// UTILITY FUNCTIONS

// utility function to show
function show(id) {
  if (id.classList.contains('hidden')) {
    console.log('show');
    id.classList.remove('hidden');
  }
}

// utility function to hide
function hide(id) {
  if (!id.classList.contains('hidden')) {
    console.log('hide');
    id.classList.add('hidden');
  }
}
