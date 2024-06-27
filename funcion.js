document.getElementById('promedioForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const nota1 = parseFloat(nota1Input.value);
    const nota2 = parseFloat(nota2Input.value);

    const inputs = [nota1Input, nota2Input];
    inputs.forEach(input => {
        if (!input.validity.valid) {
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (!nota1Input.validity.valid || !nota2Input.validity.valid) {
        return;
    }

    const promedio = (nota1 + nota2) / 2;
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
