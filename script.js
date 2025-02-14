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

// grab the lets-begin section
const letsBegin = document.getElementById('lets-begin');

// grab the circle section
const circle = document.getElementById('circle');

// grab the inhale, hold & exhale divs
const inhale = document.getElementById('inhale');
const hold1 = document.getElementById('hold1');
const exhale = document.getElementById('exhale');
const hold2 = document.getElementById('hold2');

// grab the timer & timer countdown
const timer = document.getElementById('timer');
const timerCountdown = document.getElementById('timer-countdown');

// when the intro beginBtn is clicked, hide the intro and show the begin section
beginBtn.addEventListener('click', function () {
  intro.classList.toggle('hidden');
  begin.classList.toggle('hidden');
});

// Store the time in localStorage
// function time(e) {
//   // when a time element is clicked
//   // // check the console its working
//   // // console.log(e.target.id);
//   // set localStorage time
//   localStorage.setItem('time', e.target.id);
//   // // check the console its working
//   // // console.log(localStorage.getItem('time'));
//   // hide the begin section
//   begin.classList.toggle('hidden');
//   // show the choose section
//   choose.classList.toggle('hidden');
// }

// Store the duration &
const store = {};
// Store the time

function time(e) {
  // console.log(e.target.dataset.time); test
  store.time = e.target.dataset.time;
  console.log(store.time);

  // hide begin
  begin.classList.toggle('hidden');
  // show choose
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

// calmBtn.addEventListener('click', animate);
calmBtn.addEventListener('click', calmTime1);
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

  // show lets-begin & circle
  letsBegin.classList.toggle('hidden');
  setTimeout(() => {
    letsBegin.classList.toggle('hidden');
    circle.classList.toggle('hidden');
    console.log(getComputedStyle(document.getElementById('circle')).display);
    console.log(
      getComputedStyle(document.getElementById('circle')).backgroundColor
    );
    console.log(document.querySelector('#circle'));
    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('circle').style.backgroundColor = '#fafafa';
    });
    document.getElementById('circle').style.backgroundColor = '#fafafa';
    document.getElementById('circle').style.height = '22rem';
    document.getElementById('circle').style.width = '22rem';
    document.getElementById('circle').style.borderRadius = '50%';
    document.getElementById('circle').style.boxShadow =
      '4px 4px 20px rgba(0,0,0,0.1';
  }, 3000);

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

  //   setTimeout(() => {
  //     // Update countdown every 1000 miliseconds
  //     let x = setInterval(function () {
  //       if (duration > 0) {
  //         duration -= 1000;
  //         console.log(duration);
  //         timerCountdown.textContent = duration / 1000;
  //       }
  //       // let now = new Date().getTime();
  //       // let distance = duration + now;
  //       // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //       // let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //       // console.log(minutes, seconds);
  //       else if (duration <= 0) {
  //         clearInterval(x);
  //         // hide the animation
  //         //   document
  //         //     .getElementById(localStorage.getItem('type'))
  //         //     .classList.toggle('hidden');
  //         circle.classList.toggle('hidden');
  //         intro.classList.toggle('hidden');
  //         localStorage.clear();
  //         // reset duration
  //         // duration = 0; // this doesnt seem to be working... ?
  //       }
  //     }, 1000);
  //   }, 3000);

  //// chat GPT solution 1

  // Start countdown after "Let's Begin" animation
  setTimeout(() => {
    // Immediately update timer display before countdown starts
    timerCountdown.textContent = duration / 1000; // this stops the timer from the previous iteration being rendered
    // call the  animate function
    animateCalm();

    //
    let x = setInterval(function () {
      if (duration > 0) {
        duration -= 1000;
        console.log(duration);
        timerCountdown.textContent = duration / 1000; // Update display
      } else {
        clearInterval(x);
        circle.classList.toggle('hidden');

        intro.classList.toggle('hidden');
        localStorage.clear();
        clearInterval(calmInterval);
      }
    }, 1000);
  }, 3000);

  ///// chat GPT solution #2
  //   let countdownInterval; // Store interval globally

  //   setTimeout(() => {
  //     clearInterval(countdownInterval); // Stop any previous countdown

  //     timerCountdown.textContent = duration / 1000;

  //     countdownInterval = setInterval(function () {
  //       if (duration > 0) {
  //         duration -= 1000;
  //         timerCountdown.textContent = duration / 1000;
  //       } else {
  //         clearInterval(countdownInterval);
  //         circle.classList.toggle('hidden');
  //         intro.classList.toggle('hidden');
  //         localStorage.clear();
  //       }
  //     }, 1000);
  //   }, 3000);

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

// ////////////////////
// // Chatgpt animate version

// // Utility function to toggle visibility
// function toggleVisibility(elementId) {
//   document.getElementById(elementId)?.classList.toggle('hidden');
// }

// // Utility function to delay execution using Promises
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// // Main function to start the animation
// async function animate() {
//   const time = localStorage.getItem('time');
//   const type = localStorage.getItem('type');

//   console.log(`Selected time: ${time}`);

//   if (type) toggleVisibility(type);

//   // Show "Let's Begin" message
//   toggleVisibility('letsBegin');
//   await delay(3000); // Wait 3 seconds

//   // Hide "Let's Begin", show the circle, and apply styles
//   toggleVisibility('letsBegin');
//   toggleVisibility('circle');

//   const circle = document.getElementById('circle');
//   if (circle) {
//     circle.style.cssText = `
//         background-color: #fafafa;
//         height: 22rem;
//         width: 22rem;
//         border-radius: 50%;
//         box-shadow: 4px 4px 20px rgba(0,0,0,0.1);
//       `;
//   }

//   // Determine duration
//   const timeMap = {
//     time1: 60000,
//     time2: 120000,
//     time3: 180000,
//     time5: 300000,
//     time10: 600000,
//   };

//   const duration = timeMap[time] || 0;
//   if (duration === 0) {
//     console.error('Invalid time selected!');
//     return;
//   }

//   // Start timer
//   timerCountdown.textContent = duration / 1000;
//   const calmInterval = animateCalm(); // Start breathing animation

//   let remainingTime = duration;
//   const countdownInterval = setInterval(() => {
//     remainingTime -= 1000;
//     timerCountdown.textContent = remainingTime / 1000;

//     if (remainingTime <= 0) {
//       clearInterval(countdownInterval);
//       clearInterval(calmInterval); // Stop breathing animation
//       toggleVisibility('circle');
//       toggleVisibility('intro');
//       localStorage.clear();
//     }
//   }, 1000);
// }

// // Improved breathing animation function
// function animateCalm() {
//   let calmInterval = setInterval(() => {
//     inhale.classList.toggle('hidden');
//     setTimeout(() => {
//       inhale.classList.toggle('hidden');
//       exhale.classList.toggle('hidden');
//     }, 4000);
//     setTimeout(() => {
//       exhale.classList.toggle('hidden');
//     }, 10000);
//   }, 10000);

//   return calmInterval; // Return interval ID to allow stopping it
// }

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

// calm

let calmInterval;
function animateCalm() {
  //first clear any remaining setIntervals
  if (calmInterval) {
    clearInterval(calmInterval);
  }

  // run once immediately
  inhale.classList.toggle('hidden');
  setTimeout(() => {
    inhale.classList.toggle('hidden');
    exhale.classList.toggle('hidden');
  }, 5000);
  setTimeout(() => {
    exhale.classList.toggle('hidden');
    console.log(calmInterval);
  }, 12000);

  // repeat every 10 seconds
  calmInterval = setInterval(() => {
    inhale.classList.toggle('hidden');
    setTimeout(() => {
      inhale.classList.toggle('hidden');
      exhale.classList.toggle('hidden');
    }, 5000);
    setTimeout(() => {
      exhale.classList.toggle('hidden');
      console.log(calmInterval);
    }, 12000);
  }, 12000);
}

////////////
// chatgpt recursive
// function animateCalm() {
//   inhale.classList.toggle('hidden');

//   setTimeout(() => {
//     inhale.classList.toggle('hidden');
//     exhale.classList.toggle('hidden');
//   }, 4000);

//   setTimeout(() => {
//     exhale.classList.toggle('hidden');
//     // Restart the animation cycle
//     animateCalm();
//   }, 10000);
// }

/////////
// Chatgpt without recursion
// function animateCalm() {
//   inhale.classList.toggle('hidden');

//   setTimeout(() => {
//     inhale.classList.toggle('hidden');
//     exhale.classList.toggle('hidden');
//   }, 4000);

//   setTimeout(() => {
//     exhale.classList.toggle('hidden');
//   }, 10000);
// }

// // Run the function on a loop without recursion
// setInterval(animateCalm, 10000);

// function calmTime1() {
//   const sequence = [
//     { action: 'inhale', duration: 5000 },
//     { action: 'exhale', duration: 7000 },
//     { action: 'inhale', duration: 5000 },
//     { action: 'exhale', duration: 7000 },
//     { action: 'inhale', duration: 5000 },
//     { action: 'exhale', duration: 7000 },
//     { action: 'inhale', duration: 5000 },
//     { action: 'exhale', duration: 7000 },
//     { action: 'inhale', duration: 5000 },
//     { action: 'exhale', duration: 7000 },
//     { action: 'inhale', duration: 5000 },
//   ];

//   let currentTime = 0; // Track elapsed time

//   // Show initial elements
//   calm.classList.remove('hidden');
//   circle.classList.remove('hidden');
//   inhale.classList.remove('hidden');

//   // Loop through the sequence and schedule changes
//   sequence.forEach((step, index) => {
//     setTimeout(() => {
//       inhale.classList.toggle('hidden');
//       exhale.classList.toggle('hidden');
//     }, currentTime);

//     currentTime += step.duration; // Update the time for the next step
//   });

//   // Hide the circle and show intro after 1 minute
//   setTimeout(() => {
//     inhale.classList.add('hidden');
//     circle.classList.add('hidden');
//     intro.classList.remove('hidden');
//   }, currentTime);
// }

//Write out the calm animation for 1 min from beginning to end
function calmTime1() {
  // hide calm
  calm.classList.toggle('hidden');
  // fade lets-begin in
  letsBegin.classList.toggle('hidden');
  // fade lets-begin out
  setTimeout(() => {
    letsBegin.classList.toggle('hidden');
  }, 3000);
  setTimeout(() => {
    // start with inhale & circle
    circle.classList.toggle('hidden');
    circle.style.cssText = `
        background-color: #fafafa;
        height: 22rem;
        width: 22rem;
        border-radius: 50%;
        box-shadow: 4px 4px 20px rgba(0,0,0,0.1);
        opacity: 1;
      `;
  }, 3500);
  setTimeout(() => {
    inhale.classList.toggle('hidden');
  }, 4000);
  // switch to exhale
  setTimeout(() => {
    inhale.classList.toggle('hidden');
    exhale.classList.toggle('hidden');
  }, 9000); // 4 + 5
  // switch to inhale
  setTimeout(() => {
    exhale.classList.toggle('hidden');
    inhale.classList.toggle('hidden');
  }, 16000); // 9 + 7
  // switch to exhale
  setTimeout(() => {
    inhale.classList.toggle('hidden');
    exhale.classList.toggle('hidden');
  }, 21000); // 16 + 5
  //switch to inhale
  setTimeout(() => {
    exhale.classList.toggle('hidden');
    inhale.classList.toggle('hidden');
  }, 28000); // 21 + 7
  // switch to exhale
  setTimeout(() => {
    inhale.classList.toggle('hidden');
    exhale.classList.toggle('hidden');
  }, 33000); // 28 + 5
  // switch to inhale
  setTimeout(() => {
    exhale.classList.toggle('hidden');
    inhale.classList.toggle('hidden');
  }, 40000); // 33 + 7
  // switch to exhale
  setTimeout(() => {
    inhale.classList.toggle('hidden');
    exhale.classList.toggle('hidden');
  }, 45000); // 40 + 5
  // switch to inhale
  setTimeout(() => {
    exhale.classList.toggle('hidden');
    inhale.classList.toggle('hidden');
  }, 52000); // 45 + 7
  // switch to exhale
  setTimeout(() => {
    inhale.classList.toggle('hidden');
    exhale.classList.toggle('hidden');
  }, 57000); // 52 + 5
  // switch to inhale
  setTimeout(() => {
    exhale.classList.toggle('hidden');
    inhale.classList.toggle('hidden');
  }, 64000); // 57 + 7
  setTimeout(() => {
    inhale.classList.toggle('hidden');
    circle.classList.toggle('hidden');
    end.classList.toggle('hidden');
  }, 65000);
  setTimeout(() => {
    end.classList.toggle('hidden');
    intro.classList.toggle('hidden');
  }, 68000);
}
