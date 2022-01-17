const bars = document.querySelector('.icon')
const chev = document.querySelector('.chev')
const body = document.querySelector('.body')
const container = document.querySelector('.container')

bars.addEventListener('click', showClasses)

function showClasses() {
    body.classList.toggle('show-body')
    
}

chev.addEventListener('click', function() {
    container.classList.toggle('show-list')
})

const star = document.querySelector('.star')


star.addEventListener('click', () => {
    container.classList.remove('show-list')
})