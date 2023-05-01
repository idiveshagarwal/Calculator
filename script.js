class Calculator {
    constructor(prevOpTe, currOTe) {
        this.prevOpTe = prevOpTe;
        this.currOTe = currOTe;
        this.clear()
    }
    clear() {
        this.currOTe = ''
        this.prevOpTe = ''
        this.operation = undefined
    }
    delete() {
        this.currOp = this.currOp.toSring().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currOp.includes('.')) return
        this.currOp = this.currOp.toSring() + number.toSring()

    }
    chooseOp(operation) {
        if (this.currOp === '') return
        if (this.prevOpTe !== '') {
            this.compute()
        }
        this.operation = operation;
        this.prevOpTe = this.currOp;
        this.currOp = '';
    }
    compute() {
        let computation
        const prev = parseFloat(this.prevOp);
        const curr = parseFloat(this.currOp);
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '*':
                computation = prev * curr
                break
            case '/':
                computation = prev / curr
                break
            default:
                return
        }
        this.currOp = computation
        this.operation = undefined
        this.prevOp = ''
    }
    updateDisplay() {
        this.currOTe.innerText = this.currOp
        if (this.operation != null) this.prevOp.innerText = '${this.prevOp} ${this.operation}'
    }

}

const numButton = document.querySelectorAll('[data-num]');
const opButton = document.querySelectorAll('[data-op]');
const eqButton = document.querySelectorAll('[data-eq]');
const delButton = document.querySelectorAll('[data-del]');
const acButton = document.querySelectorAll('[data-ac]');
const prevOpTe = document.querySelectorAll('[data-prev-op]');
const numButton = document.querySelectorAll('[data-curr-op]');

const calculator = new Calculator(prevOpTe, currOTe)

numButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

opButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOp(button.innerText)
        calculator.updateDisplay()
    })
})

eqButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

acButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
delButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})