class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
    this.miliInterval = 0
    this.miliTime = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      callback()
    }, 1000)
    this.miliInterval = setInterval(() => {
      this.miliTime++
    }, 10)
  }
  getMinutes() {
    // ... your code goes here
    let minutes = Number(this.currentTime)/60
    let realMinutes = Math.floor(minutes)
    return realMinutes
    
  }
  getSeconds() {
    // ... your code goes here
    let seconds = Number(this.currentTime)
  
    return seconds%60
    
  }
  getMili() {
    let mili = Number(this.miliTime)
    console.log(mili)
    return mili
  }

  twoDigitsNumber(number) {
    // ... your code goes here
    if (number < 10) {
      return `0${number}`
    } else if (number > 10) {
      return `${number}`
    }

  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes()
    let sec = this.getSeconds()

    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
  }
}
