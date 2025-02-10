console.log('Hello'); // check the js file is connected to the index.html

const intro = document.getElementById('intro'); // grab the intro section
const begin = document.getElementById('begin'); // grab the begin section
const choose = document.getElementById('choose'); // grab the choose section

const beginBtn = document.getElementById('beginBtn'); // grab the intro beginBtn

// when the intro beginBtn is clicked, hide the intro and show the begin section

beginBtn.addEventListener('click', function () {
  intro.classList.toggle('hidden');
  begin.classList.toggle('hidden');
});

// grab the time elements
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const time3 = document.getElementById('time3');
const time5 = document.getElementById('time5');
const time10 = document.getElementById('time10');

function time(e) {
  // when a time element is clicked
  // check the console its working
  console.log(e.target.id);
  // set localStorage time
  localStorage.setItem('time', e.target.id);
  // check the console its working
  console.log(localStorage.getItem('time'));
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

// grab the choice elements
const chooseCalm = document.getElementById('chooseCalm');
const chooseClear = document.getElementById('chooseClear');
const chooseRelax = document.getElementById('chooseRelax');
const chooseRelieve = document.getElementById('chooseRelieve');

chooseCalm.addEventListener('click', choice);
chooseClear.addEventListener('click', choice);
chooseRelax.addEventListener('click', choice);
chooseRelieve.addEventListener('click', choice);

function choice(e) {
  // Check its working by printing to the console
  console.log('choice');
  // Check the e.target.id is correct
  console.log(e.target.id);
  // hide the choice section
  choose.classList.toggle('hidden');
  // show the relevant exercise section

  //   console.log(e.target.id);
  //   localStorage.setItem('exercise', e.target.id);
  //   choose.classList.toggle('hidden');
  //   exercise();
}

function exercise() {
  const time = localStorage.getItem('time');
  const type = localStorage.getItem('exercise');
  console.log('here we go');
  console.log(time, type);

  // define the duration of practice
  let duration = 0;
  switch (time) {
    case 'time1':
      duration = 60;
      break;
    case 'time2':
      duration = 120;
      break;
    case 'time3':
      duration = 180;
      break;
    case 'time5':
      duration = 300;
      break;
    case 'time10':
      duration = 600;
      break;
    default:
      console.log('not working!');
  }
  console.log(duration);

  // define the type of practice

  let practice;
  switch (type) {
    case 'chooseCalm':
      chooseCalm.classList.toggle('hidden');
      break;
    default:
      console.log('broken');
  }
}

// So how does this all fit together?

// 1 choice eventlistener toggles intro and toggles choice
// 2 animation is called with the duration
// 3 when duration ends intro and choice are toggled
