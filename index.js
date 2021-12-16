// Write your code here!
const body = document.querySelector('body')
const main = document.getElementById('main')

body.remove(main)


const newHeader = document.createElement('H1')
newHeader.textContent = 'Charles is the champion'
newHeader.id = 'victory'