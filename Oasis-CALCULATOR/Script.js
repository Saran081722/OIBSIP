document.addEventListener('DOMContentLoaded', function() {
    const expressionDisplay = document.getElementById('expression');
    const resultDisplay = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn');
    let expression = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'clear') {
                expression = '';
                result = '';
            } else if (value === 'del') {
                expression = expression.slice(0, -1);
            } else if (value === 'ans') {
                expression += result;
            } else if (value === '=') {
                try {
                    result = eval(expression);
                    if (result === Infinity || result === -Infinity || isNaN(result)) {
                        result = 'Error';
                    }
                } catch {
                    result = 'Error';
                }
            } else {
                expression += value;
            }

            expressionDisplay.textContent = expression || '0';
            resultDisplay.textContent = result || '0';
        });
    });
});