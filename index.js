// Write your code here!
document.getElementById('main').remove();
let newText = document.createElement('h1');
newText.setAttribute('id', 'victory');
newText.innerContent = "Flatiron school is the champion";
newText.className = "victory";
let newHeader=docunmet.querySelector('h1#victory');
body.appendChild(newText);