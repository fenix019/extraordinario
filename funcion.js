document.getElementById('promedioForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nota1Input = parseFloat(document.getElementById('nota1').value);
    const nota2Input = parseFloat(document.getElementById('nota2').value);

    const inputs = [nota1Input, nota2Input];
    inputs.forEach(input => {
        if (isNaN(input)) {
            document.getElementById('resultado').textContent = "Ingrese números válidos";
        }
    });

    if (isNaN(nota1Input) || isNaN(nota2Input)) {
        return;
    }

    const promedio = (nota1Input + nota2Input) / 2;
    document.getElementById('resultado').textContent = promedio.toFixed(2);
});

document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('input', function() {
        if (this.validity.valid) {
            this.classList.remove('is-invalid');
        } else {
            this.classList.add('is-invalid');
        }
    });
});
