const testButton = document.getElementById('takeTest');
const resultsSection = document.getElementById('testResults');
import { countAsYes } from './utils.js';
testButton.addEventListener('click', ()=>{ 
    console.log('It works');
  
    let answers = 0;
  
    alert('Welcome to THE BAT-TEST');
  
    const canConfirm = confirm ('Are you sure you want to take THE BAT-TEST?');
  
    if (!canConfirm) { console.log('Declined to test'); } 
  
    const firstName = prompt('What is your first name?');
  
    const lastName = prompt('What is your last name?');
  
    const answer1 = prompt('Batmans secret identity is Bruce Wayne?');
  
    if (countAsYes(answer1)){  
        ++answers;
    }
    const answer2 = prompt('Does Batman work in Gotham City?');
    if (countAsYes(answer2)){
        ++answers;
    }
    const answer3 = prompt('Is Batman also known as The Worlds Greatest Detective?');
    if (countAsYes(answer3)){
        ++answers;
    }
    const percCor = Math.round((answers / 3) * 100);

    resultsSection.textContent = `Congratulation ${firstName} ${lastName} got ${percCor}%`;
});
