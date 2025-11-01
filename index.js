const display = document.getElementById("display");

        function appendToDisplay(input) {
            if (display.value === "0" || display.value === "Error") {
                display.value = input;
            } else {
                display.value += input;
            }
        }

        function clearDisplay() {
            display.value = "0";
        }

        function deleteLast() {
            if (display.value.length > 1) {
                display.value = display.value.slice(0, -1);
            } else {
                display.value = "0";
            }
        }

        function calculate() {
            try {
                // Replace display symbols with actual operators
                let expression = display.value
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/')
                    .replace(/−/g, '-');
                
                display.value = eval(expression);
            } catch (error) {
                display.value = "Error";
            }
        }

        // Keyboard support
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            
            if (key >= '0' && key <= '9') {
                appendToDisplay(key);
            } else if (key === '.') {
                appendToDisplay(key);
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                appendToDisplay(key);
            } else if (key === 'Enter' || key === '=') {
                event.preventDefault();
                calculate();
            } else if (key === 'Escape' || key === 'c' || key === 'C') {
                clearDisplay();
            } else if (key === 'Backspace') {
                event.preventDefault();
                deleteLast();
            }
        });