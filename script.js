const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "01123456789";
const symbols = "!@#$%^&*)_+=";

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

function getRandomLower() {
	return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getRandomUpper() {
	return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getRandomNumber() {
	return numbers[Math.floor(Math.random()*numbers.length)];
}

function getRandomSymbol() {
	return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword() {
    const len = lengthEl.value;
    let result = "";
    for (let i=0; i<len; i++) {
        const x = generateX();
        result += x;
    }
    resultEl.innerText = result;
}

function generateX() {
    const xs = [];
    if(uppercaseEl.checked) {
        xs.push(getRandomUpper());
    }
    if(lowercaseEl.checked) {
        xs.push(getRandomLower());
    }
    if(symbolsEl.checked) {
        xs.push(getRandomSymbol());
    }
    if(numbersEl.checked) {
        xs.push(getRandomNumber());
    }
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', 
	generatePassword);