let pixelBorder = document.querySelector('#pixel-border');

function quantidade(n) {
   for( let i = 0; i < n*n; i += 1) {
       const div = document.createElement('div');
       div.classList.add('pixel');

       pixelBorder.appendChild(div);
   }
}
quantidade(4)