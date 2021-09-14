


const occupation = document.getElementById('occupation')
const form = document.getElementById('form')


const objEvent = form.addEventListener('submit', function (e) {
    e.preventDefault() 

    const name = document.getElementById('name')
    const age = document.getElementById('age')

    let p1 = document.getElementById('p1')
    let p2 = document.getElementById('p2')
    let p3 = document.getElementById('p3')
    let p4 = document.getElementById('p4')
    let pgraph = document.getElementById('pgraph')
    const height = document.getElementById('height')

    p1.innerText = `{ name: ${name.value}`
    p2.innerText = ` age: ${age.value}`
    p3.innerText = ` height: ${height.value}`
    p4.innerText = ` occupation: ${occupation.value} }`
    pgraph.style.display = 'block'

}) 