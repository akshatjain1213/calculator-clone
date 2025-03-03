let display = document.getElementById('inputbox');

let buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let value = button.innerText;

        if (value === "=") {
            try {
                expression = eval(expression); // Evaluate the expression
            } catch {
                expression = "Error";
            }
        } else if (value === "AC") {
            expression = ""; // Clear everything
        } else if (value === "DEL") {
            expression = expression.slice(0, -1); // Remove the last character
        } else {
            expression += value; // Add button text to the expression
        }

        display.value = expression; // Update the display
    });
});
