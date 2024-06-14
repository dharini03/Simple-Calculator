document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".calculator-display");
    const keys = document.querySelectorAll(".key");

    let currentValue = "";
    const operators = ["%", "*", "/", "-", "+", "="];

    const calculate = (value) => {
        if (value === "AC") {
            currentValue = "";
        } else if (value === "DEL") {
            currentValue = currentValue.slice(0, -1);
        } else if (value === "=") {
            if (currentValue.includes("%")) {
                currentValue = currentValue.replace("%", "/100");
            }
            try {
                currentValue = eval(currentValue);
            } catch {
                currentValue = "Error";
            }
        } else {
            if (currentValue === "" && operators.includes(value)) return;
            currentValue += value;
        }
        display.value = currentValue;
    };

    keys.forEach(key => {
        key.addEventListener("click", () => calculate(key.dataset.value));
    });
});
