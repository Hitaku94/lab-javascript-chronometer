class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
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
  twoDigitsNumber() {
    // ... your code goes here
    if (this.getMinutes() < 10) {
      return `0${this.getMinutes()}`
    } else if (this.getMinutes() > 10) {
      return `${this.getMinutes()}`
    }
    
    if (this.getSeconds() < 10) {
      return `0${this.getSeconds()}`
    } else if (this.getSeconds() > 10) {
      return `${this.getSeconds()}`
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
  }
}
