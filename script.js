const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
          display.value += button.textContent;
        }
        if (button.classList.contains('operator')) {
          display.value += ` ${button.textContent} `;
        }
        if (button.classList.contains('clear')) {
          display.value = '';
        }
        if (button.classList.contains('equal')) {
            const result = eval(display.value);
            display.value = result.toString();
        }
        if (button.classList.contains('erase')) {
          display.value = display.value.slice(0, -1);
        }
        if (button.classList.contains('dot')) {
          display.value += button.textContent;
        }
      });
    });