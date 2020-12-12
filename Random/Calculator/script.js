class Calculator
{
    constructor(previousOperandTextElement, currentoperandTextElement)
    {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentoperandTextElement = currentoperandTextElement;
        this.clear();
    }
    clear()
    {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete()
    {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number)
    {
        if (number === '.' && this.currentOperand.includes('.') ) return
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation) // connected to the calculation operationsButtons....
    {
        if (this.currentOperand === '') return 
        if (this.previousOperand !== '') 
        {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand; // the current becomes the previous. moving from the current to the previous. Moving something.
        this.currentOperand = ''; /// becomes empty. clearing out.

    }

    compute()
    {
        let computation;
        let prev = parseFloat(this.previousOperand);
        let curr = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(curr)) return; ///if no number has been put in, this will not run.
        switch (this.operation)
        {
            case '+': 
                computation = prev + curr;
                break;
            case '-': 
                computation = prev - curr;
                break;
            case '*': 
                computation = prev * curr;
                break;
            case '÷': 
                computation = prev / curr;
                break;
            default:
                return;
            
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';

    }

    getDisplayNumber(number)
    {
        let stringNumber = number.toString();
        let integerDigits = parseFloat(stringNumber.split('.')[0]); //the first button you press. take out the before .
        let decimalDigits = stringNumber.split('.')[1]; // after the .
        let integerDisplay
        if (isNaN(integerDigits))
        {
            integerDisplay = ''
        }else
        {
            integerDisplay = integerDigits.toLocaleString('en',
            {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null)
        {
            return `${integerDisplay}.${decimalDigits}`
        }else
        {
            return integerDisplay;
        }
    }

   


updateDisplay() {
    this.currentoperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}




let numberButtons = document.querySelectorAll('[data-number]'); // target all numbers
let operationButtons = document.querySelectorAll('[data-operation]'); // target all operations
let equalsButton = document.querySelector('[data-equals'); // because it is only one, you don't need All.
let allClearButton = document.querySelector('[data-all-clear]');
let deleteButton = document.querySelector('[data-delete]');
let previousOperandTextElement = document.querySelector('[data-previous-operand]');
let currentoperandTextElement = document.querySelector('[data-current-operand]');

let calculator = new Calculator(previousOperandTextElement, currentoperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    });
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    });
})

equalsButton.addEventListener('click', button => 
{
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => 
{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => 
{
    calculator.delete();
    calculator.updateDisplay();
})