// index.js
const mainElement = document.getElementById('main');
mainElement.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victor';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with the actual name

document.body.appendChild(newHeader);
    