document.getElementsByTagName('h1')[0].style.backgroundColor = 'cyan'
document.getElementsByTagName('h1')[0].style.padding = '30px'
document.getElementsByTagName('h1')[0].style.width = '50%'
document.getElementsByTagName('h1')[0].style.margin = 'auto'
document.getElementsByTagName('h1')[0].style.fontFamily = 'monospace'
document.getElementsByTagName('h1')[0].style.borderRadius = '10px'


document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#ffa500c7'
document.getElementsByClassName('emergency-tasks')[0].style.width = '26%'
document.getElementsByClassName('emergency-tasks')[0].style.margin= '0'
document.getElementsByClassName('emergency-tasks')[0].style.borderRadius = '5px'

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#ffa500c7'
document.getElementsByClassName('no-emergency-tasks')[0].style.width = '26%'
document.getElementsByClassName('no-emergency-tasks')[0].style.borderRadius = '5px'
document.getElementsByClassName('no-emergency-tasks')[0]

document.getElementById('header-container').style.paddingBottom = '8px'

let h3Listas = document.querySelectorAll('.emergency-tasks h3 , .no-emergency-tasks h3');
for (let i = 0; i < h3Listas.length; i += 1) {
    h3Listas[i].style.backgroundColor = 'orange'
    h3Listas[i].style.borderRadius = '5px'
    h3Listas[i].style.margin = '0'
}
document.querySelector('#footer-container').style.padding = '3px'

document.querySelector('#footer-container div').style.color = 'white'
document.querySelector('#footer-container div').style.backgroundColor = '#7d997d'
document.querySelector('#footer-container div').style.width = '53%'
document.querySelector('#footer-container div').style.borderRadius = '5px'
document.querySelector('#footer-container div').style.margin = 'auto'







