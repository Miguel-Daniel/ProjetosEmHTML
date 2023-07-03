let display = document.getElementById('display');
        let currentNumber = '';
        let currentOperator = null;
        let waitingForNextNumber = false;

        function appendDigit(digit) {
            if (waitingForNextNumber) {
                display.textContent = digit;
                waitingForNextNumber = false;
            } else {
                if (display.textContent === '0') {
                    display.textContent = digit;
                } else {
                    display.textContent += digit;
                }
            }
        }

        function appendOperator(operator) {
            if (currentOperator !== null) {
                calculateResult();
            }
            currentNumber = display.textContent;
            currentOperator = operator;
            waitingForNextNumber = true;
        }

        function calculateResult() {
            if (currentOperator === null) return;

            let result;
            switch (currentOperator) {
                case '+':
                    result = parseFloat(currentNumber) + parseFloat(display.textContent);
                    break;
                case '-':
                    result = parseFloat(currentNumber) - parseFloat(display.textContent);
                    break;
                case '*':
                    result = parseFloat(currentNumber) * parseFloat(display.textContent);
                    break;
                case '/':
                    result = parseFloat(currentNumber) / parseFloat(display.textContent);
                    break;
                default:
                    return;
            }

            display.textContent = result;
            currentNumber = '';
            currentOperator = null;
            waitingForNextNumber = true;
        }

        function clearDisplay() {
            display.textContent = '0';
            currentNumber = '';
            currentOperator = null;
            waitingForNextNumber = false;
        }

        function deleteDigit() {
            if (waitingForNextNumber) return;

            let currentValue = display.textContent;
            display.textContent = currentValue.slice(0, -1);
            if (display.textContent === '') {
                display.textContent = '0';
            }
        }