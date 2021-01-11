const testButton = document.getElementById('takeTest');
const resultsSection = document.getElementById('testRessults');
// initialize state

// set event listeners to update state and DOM
testButton.addEventListener('click', ()=>{ 
    console.log('It works');
    alert('Welcome to THE BAT-TEST');
    const canConfirm = confirm ('Are you sure you want to take THE BAT-TEST?');
    if (!canConfirm) { console.log('Declined to test'); } 
    const answer1 = prompt('Batmans secret identity is Bruce Wayne?');
    const answer2 = prompt('Does Batman work in Gotham City?')
    const answer3 = prompt('Is Batman also known as The Worlds Greatest Detective?');
});
