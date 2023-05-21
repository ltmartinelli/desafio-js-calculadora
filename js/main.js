const inputNumber1 = document.getElementById('number1');
inputNumber1.value = 0;

const inputNumber2 = document.getElementById('number2');
inputNumber2.value = 0;

const btnPlus = document.getElementById('btn-plus').addEventListener('click', handleBtnPlusClick);
const btnTimes = document.getElementById('btn-times').addEventListener('click', handleBtnTimesClick);
const btnClear = document.getElementById('btn-clear').addEventListener('click', handleBtnClearClick);;

const resultBox = document.getElementById('result-box');
resultBox.innerHTML = 0;


////////// Button Functions ///////////

function handleBtnPlusClick()
{
    const n1 = Number(inputNumber1.value);
    const n2 = Number(inputNumber2.value);

    if (!isNumber(n1))
    {
        addInputErrorClass(inputNumber1);
    }
    if (!isNumber(n2))
    {
        addInputErrorClass(inputNumber2);
    }
    if (isNumber(n1) && isNumber(n2))
    {
        removeInputErrorClass(inputNumber1);
        removeInputErrorClass(inputNumber2);
        resultBox.innerHTML = n1 + n2;
    }
}

function handleBtnTimesClick()
{
    const n1 = Number(inputNumber1.value);
    const n2 = Number(inputNumber2.value);

    if (!isNumber(n1))
    {
        addInputErrorClass(inputNumber1);
    }
    if (!isNumber(n2))
    {
        addInputErrorClass(inputNumber2);
    }
    if (isNumber(n1) && isNumber(n2))
    {
        removeInputErrorClass(inputNumber1);
        removeInputErrorClass(inputNumber2);
        resultBox.innerHTML = n1 * n2;
    }
}

function handleBtnClearClick()
{
    inputNumber1.value = 0;
    inputNumber2.value = 0;
    removeInputErrorClass(inputNumber1);
    removeInputErrorClass(inputNumber2);
    resultBox.innerHTML = 0;
}

////////// Auxiliary Functions ////////////

function isNumber(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function addInputErrorClass(element)
{
    element.classList.add('input-error');
}

function removeInputErrorClass(element)
{
    element.classList.remove('input-error');
}


