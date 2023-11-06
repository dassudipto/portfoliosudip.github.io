function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid weight and height.';
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    const result = `Your BMI is ${bmi.toFixed(2)}`;

    let interpretation;
    if (bmi < 18.5) {
        interpretation = 'Underweight';
    } else if (bmi < 24.9) {
        interpretation = 'Normal Weight';
    } else if (bmi < 29.9) {
        interpretation = 'Overweight';
    } else {
        interpretation = 'Obese';
    }

    document.getElementById('result').textContent = `${result} (${interpretation})`;
}
