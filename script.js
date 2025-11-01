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
        let expression = display.value
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/−/g, '-');
        display.value = eval(expression);
      } catch {
        display.value = "Error";
      }
    }

    document.addEventListener('keydown', function(event) {
      const key = event.key;
      if (key >= '0' && key <= '9') appendToDisplay(key);
      else if (key === '.') appendToDisplay(key);
      else if (['+', '-', '*', '/'].includes(key)) appendToDisplay(key);
      else if (key === 'Enter' || key === '=') {
        event.preventDefault(); calculate();
      } else if (['Escape', 'c', 'C'].includes(key)) clearDisplay();
      else if (key === 'Backspace') {
        event.preventDefault(); deleteLast();
      }
    });