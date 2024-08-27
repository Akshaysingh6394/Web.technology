function calculateFactorial() {
    let number = document.getElementById("number").value;
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    document.getElementById("niet").innerText = `Factorial of ${number} is ${result}`;
}
