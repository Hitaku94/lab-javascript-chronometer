const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes herpr
  printSeconds()
  printMinutes()
  printMilliseconds()
}

function printMinutes() {
  // ... your code goes here
  if (chronometer.getMinutes() < 10) {
    minUni.innerText = chronometer.getMinutes()%10
  }
}

function printSeconds() {
  // ... your code goes here
  secUni.innerText = chronometer.getSeconds()%10

if (secDec.innerText == 5 && secUni.innerText == 0) {
  secDec.innerText = 0 - 1
}
if (secUni.innerText == 0) {
  secDec.innerText = Number(secDec.innerText) + 1
}

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  milUni.innerText = chronometer.getMili()%10
}

function printSplit() {
  // ... your code goes here
  let list = document.createElement("li")
        list.innerText = chronometer.splitClick()
        let ol = document.querySelector("#splits")
        ol.appendChild(list)
        
}

function clearSplits() {
  // ... your code goes here
  chronometer.resetClick()
  let clear = document.querySelectorAll("li")
  clear.forEach((li) => {
    li.remove()
  })

  minDec.innerText = 0
  minUni.innerText = 0
  secDec.innerText = 0
  secUni.innerText = 0

  
  
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerText == "START") {
    btnLeft.innerText = "STOP"
    btnRight.innerText = "SPLIT"
    btnLeft.classList.toggle(`start`)
    btnLeft.classList.toggle(`stop`)
    btnRight.classList.toggle(`reset`)
    btnRight.classList.toggle(`split`)
    chronometer.startClick(printTime)

    
  } 
  else if (btnLeft.innerText == "STOP") {
    btnLeft.innerText = "START"
    btnRight.innerText = "RESET"
    btnLeft.classList.toggle(`stop`)
    btnLeft.classList.toggle(`start`)
    btnRight.classList.toggle(`split`)
    btnRight.classList.toggle(`reset`)
    chronometer.stopClick() 

  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText == "SPLIT") {
    printSplit()
  }
  if (btnRight.innerText == "RESET") {
    clearSplits()
  }
  // ... your code goes here
});
