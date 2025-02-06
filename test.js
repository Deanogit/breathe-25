const content = document.getElementById('content');
const beginBtn = document.getElementById('begin-btn');

function animation() {
  content.style.opacity = 0;
  setTimeout(() => {
    content.innerHTML = `
        <h2>Choose how long you'd like to practice for</h2>
        <nav>
        <ul>
        <li><a id="time1" href="#1">1 min</a></li>
        <li><a id="time2" href="#2">2 min</a></li>
        <li><a id="time3" href="#3">3 min</a></li>
        <li><a id="time5" href="#5">5 min</a></li>
        <li><a id="time10" href="#10">10 min</a></li>
        </ul>
        </nav>
        `;
  }, 2000);
  setTimeout(() => {
    content.style.opacity = 1;
  }, 3000);
}

beginBtn.addEventListener('click', animation);
