const input = document.querySelector('#salary');
const buttonCalc = document.querySelector('#button');

buttonCalc.addEventListener('click', function() {
    const inputValue = Number(input.value);
	
    if(inputValue >= 0 && inputValue <= 3) {
        alert('0%');
    } else if(inputValue >= 3 && inputValue < 10) {
      alert('10%');
    } else if(inputValue >= 10 && inputValue < 20) {
      alert('20%');
    } else if(inputValue > 20) {
      alert('25%');
    } else {
      alert('ERROR!');
    }
    input.value = '';
});
