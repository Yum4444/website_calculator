const head = document.head;

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}



const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener("click", function(event) {
        // mendapatkan objek elemen yang di klik
        const target = event.target;

        if(target.classList.contains("clear")) {
            clearCalculator();
            updateDisplay();
            return;
        }
    
        if(target.classList.contains("negative")) {
            inversNumber();
            updateDisplay();
            return;
        }
    
        if(target.classList.contains("equals")) {
            performCalculator();
            updateDisplay();
            return;
        }
    
        if(target.classList.contains("operator")) {
            handleOperator(target.innerText);
            return;
        }

        inputDigit(target.innerText);
        updateDisplay()

    });

}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    if(calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
    
}


function inversNumber() {
    if(calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if(!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;

        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    } else {
        alert('operator sudah ditetapkan')
    }
}

function performCalculator() {
    if(calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    calculator.displayNumber = result;
}
