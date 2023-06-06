const toggleBtn = document.querySelector('.toggleBtn')
const plusBtn = document.querySelector('.plusIcon')
const minusBtn = document.querySelector('.minusIcon')
const accordionText = document.querySelector('.content')

toggleBtn.addEventListener('click', () => {
    plusBtn.classList.toggle('active')
    minusBtn.classList.toggle('active')
    accordionText.classList.toggle('active')
})