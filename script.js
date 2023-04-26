console.log('Hi');

function clock() {

  const hoursArrow = document.querySelector('.hours')
  const minutesArrow = document.querySelector('.minutes')
  const secondsArrow = document.querySelector('.secunds')

  const deg = 6

  setInterval(() => {

    const day = new Date()

    // 360 градусов циферблат, в нем 12 часов, значит один час это 360 / 12 = 30 - на сколько градусов отклонять
    const hours = day.getHours() * 30
    const minutes = day.getMinutes() * deg
    const secunds = day.getSeconds() * deg

    hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`

    minutesArrow.style.transform = `rotateZ(${minutes}deg)`

    secondsArrow.style.transform = `rotateZ(${secunds}deg)`

  }, 0)

}

clock()