document.getElementById('boton').addEventListener('click', function() {
    const input = document.getElementById('numero').value;
    const numero = Number(input);
    const calculo = document.getElementById('resultado');

    calculo.innerHTML = '';

    if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
        calculo.innerText = 'Error, solo puede introducir numeros positivos.';
        return;
    }

    const resultado = calcular(numero);
    calculo.innerText = `El factorial de ${numero} es: ${resultado}`;
});

document.getElementById('borrar').addEventListener('click', function() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerText = '';
});

function calcular(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calcular(num - 1);
}