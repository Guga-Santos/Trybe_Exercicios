const div = document.querySelector('.img');
const img = document.querySelector('#inputfile');

img.addEventListener('click', () => {
    div.style.backgroundImage = img.src = `url('${img}')`
})