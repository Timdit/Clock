let hour = document.querySelector('.h'),
  min = document.querySelector('.m'),
  sec = document.querySelector('.s'),
  hoursNumber = document.querySelector('.hours'),
  minutesNumber = document.querySelector('.minutes');



// let time = new Date();

// console.log(time);
// console.log(time.getDate());
// console.log(time.getDay());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getMilliseconds());
// console.log(time.getMonth());



function clock() {

  let time = new Date(),
    second = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

  sec.style = `transform: rotate(${second}deg)`;
  min.style = `transform: rotate(${minutes}deg)`;
  hour.style = `transform: rotate(${hours}deg)`;

  hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

  setTimeout(() => clock(), 1000);
  // Рекурсия  это когда функция вызывает саму себя внутри себя
}

clock();


const tabsItem = document.querySelectorAll('.tabsItem'),
  tabsContent = document.querySelectorAll('.tabsContentItem');




tabsItem.forEach((item, i) => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); /* отменяет обычное поведение элементов в браузере */
    removeActiveClass();
    this.classList.add('active');
    tabsContent[i].classList.add('active');
  })
})

function removeActiveClass() {
  tabsItem.forEach((item, i) => {
    item.classList.remove('active');
    tabsContent[i].classList.remove('active');
  })
}

let btn = document.querySelector('.stopwatch__btn'),
  watchSecond = document.querySelector('.stopwatch__seconds'),
  watchMInute = document.querySelector('.stopwatch__minutes'),
  watchHour = document.querySelector('.stopwatch__hours'),
  timerCl;


// let timeHour = 0,
//   timeMinute = 0,
//   timeSec = 0;



function controlsTimer() {
  btn.addEventListener('click', () => {
    if (btn.innerHTML == 'start') {
      btn.innerHTML = 'stop';
      timer()
    } else if (btn.innerHTML == 'stop') {
      btn.innerHTML = 'reset'
      clearTimeout(timerCl);
    } else if (btn.innerHTML == 'reset') {
      btn.innerHTML = 'start'
      watchSecond.innerHTML = '0';
      watchMInute.innerHTML = '0';
      watchHour.innerHTML = '0';
    }
  })
}
controlsTimer()

function timer() {
  if (watchSecond.innerHTML < 59) {
    watchSecond.innerHTML++
  } else if (watchSecond.innerHTML == 59) {
    watchSecond.innerHTML = 0;
    if (watchMInute.innerHTML < 59) {
    watchMInute.innerHTML++
  } else if (watchMInute.innerHTML == 59) {
    watchMInute.innerHTML = 0;
  }
  }
   watchSecond.innerHTML = watchSecond.innerHTML < 10 ? '0' + watchSecond.innerHTML : watchSecond.innerHTML;
  //  watchMInute.innerHTML = watchMInute.innerHTML < 10 ? '0' + watchMInute.innerHTML : watchMInute.innerHTML;

  timerCl = setTimeout(() => timer(), 1000);
}


  // function timer() {
  //   watchSecond.innerHTML++
  //   setTimeout(() => timer(), 1000);
  // }