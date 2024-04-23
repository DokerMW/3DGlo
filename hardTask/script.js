const input = document.querySelector('input')
const par = document.querySelector('p')

function debounce(callee, timeoutMs) {
  return function perform(...args) {
    let previousCall = this.lastCall

    this.lastCall = Date.now()

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer)
    }

    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
  }
}


function changePar(){
	par.textContent = input.value
}

const debounced = debounce(changePar, 300)

input.addEventListener('input', debounced)
