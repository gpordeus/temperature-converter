const celsiusInput = document.querySelector('#celsius > input')
const fahrenheitInput = document.querySelector('#fahrenheit > input')
const kelvinInput = document.querySelector('#kelvin > input')

function round(num){
    return Math.round(num*100)/100;
}

function celsiusConversion() {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit =  (celsius * (9/5)) + 32;
    const kelvin = celsius + 273.15;
    kelvinInput.value = round(kelvin);
    fahrenheitInput.value = round(fahrenheit);
}

function fahrenheitConversion() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius =  (fahrenheit - 32) * (5/9);
    const kelvin = celsius + 273.15;
    kelvinInput.value = round(kelvin);
    celsiusInput.value = round(celsius);
}

function kelvinConversion() {
    const kelvin = parseFloat(kelvinInput.value);
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * (9/5)) + 32;
    fahrenheitInput.value = round(fahrenheit);
    celsiusInput.value = round(celsius);
}

celsiusInput.addEventListener('input', celsiusConversion);
fahrenheitInput.addEventListener('input', fahrenheitConversion);
kelvinInput.addEventListener('input', kelvinConversion);