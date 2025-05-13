const calculate = () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => b !== 0 ? (a / b).toFixed(2) : "Infinity";

  document.getElementById('add').textContent = `Addition: ${add(num1, num2)}`;
  document.getElementById('sub').textContent = `Subtraction: ${sub(num1, num2)}`;
  document.getElementById('mul').textContent = `Multiplication: ${mul(num1, num2)}`;
  document.getElementById('div').textContent = `Division: ${div(num1, num2)}`;
};
