const occupation = document.getElementById('occupation')
const name1 = document.getElementById('name')
const age = document.getElementById('age')

let p0 = document.getElementById('p0')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')

let pgraph = document.getElementById('pgraph')

const form = document.getElementById('form')

const objEvent = form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (name1.value.length === 0 || 
        age.value.length === 0 || 
        occupation.value.length === 0) {
        e.preventDefault()
        alert('Please fill in all the fields')
    } else 
    
    {

        p0.innerText = 'const person = {'
        p1.innerText = ` name: ${name1.value}`
        p2.innerText = ` age: ${age.value}`
        p3.innerText = ` occupation: ${occupation.value}` 
        p4.innerText = '}'
        pgraph.style.display = 'block'

    }

}) 