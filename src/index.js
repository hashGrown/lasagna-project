import _ from 'lodash';
import './style.css';
import Play from './play.svg';

function component() {
    const element = document.createElement('div');
  
      // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    // Add the image to our existing div.
    const playIcon = new Image();
    playIcon.src = Play;

    element.appendChild(playIcon);

    return element;
  }
  
  document.body.appendChild(component());