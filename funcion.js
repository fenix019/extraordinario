document.getElementById('promedioForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    
    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, ingrese dos números válidos.");
        return;
    }

    const promedio = (nota1 + nota2) / 2;
    document.getElementById('resultado').textContent = promedio.toFixed(2);
});
