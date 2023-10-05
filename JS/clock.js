const ShowTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const clock = document.querySelector('#time')

  clock.innerHTML = `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }:${seconds < 10 ? '0' + seconds : seconds}`
}

setInterval(ShowTime, 1000)

let textColorSelected = false
let boxColorSelected = false

const setStyles = () => {
  const textColor = document.querySelector('#text-color').value
  const boxColor = document.querySelector('#box-color').value

  if (textColorSelected || boxColorSelected) {
    const timeElement = document.querySelector('#time')

    if (textColorSelected) {
      timeElement.style.color = textColor
      textColorSelected = true
    }

    if (boxColorSelected) {
      timeElement.style.backgroundColor = boxColor
      boxColorSelected = true
    }
  }
}

document.querySelector('#box-color').addEventListener('input', () => {
  boxColorSelected = true
  setStyles()
})

document.querySelector('#text-color').addEventListener('input', () => {
  textColorSelected = true
  setStyles()
})
