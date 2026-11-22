
// EJERCICIO 1 - NÚMERO PAR O IMPAR

function verificarParImpar() {
    const valor = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado1");

    if (valor.trim() === "") {
        resultado.textContent = "Debe ingresar un número.";
        return;
    }

    const numero = Number(valor);

    if (!Number.isInteger(numero)) {
        resultado.textContent = "Debe ingresar un número entero.";
        return;
    }

    if (numero < -100000 || numero > 100000) {
        resultado.textContent =
            "El número debe estar entre -100000 y 100000.";
        return;
    }

    if (numero % 2 === 0) {
        resultado.textContent = "Resultado: PAR";
    } else {
        resultado.textContent = "Resultado: IMPAR";
    }
}


// ejercicio 2

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function mostrarPrimos() {
    const valorA = document.getElementById("numeroA").value;
    const valorB = document.getElementById("numeroB").value;
    const resultado = document.getElementById("resultado2");

    if (valorA.trim() === "" || valorB.trim() === "") {
        resultado.textContent = "Debe ingresar ambos números.";
        return;
    }

    const a = Number(valorA);
    const b = Number(valorB);

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        resultado.textContent = "Debe ingresar números enteros.";
        return;
    }

    if (a < 1 || b > 100000 || a > b) {
        resultado.textContent =
            "Los valores deben cumplir: 1 <= a <= b <= 100000.";
        return;
    }

    const primos = [];

    for (let i = a; i <= b; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    if (primos.length === 0) {
        resultado.textContent =
            "No se encontraron números primos";
    } else {
        resultado.textContent =
            "Números primos: " + primos.join(", ");
    }
}


// EJERCICIO 3 - FIBONACCI

function calcularFibonacci() {
    const valor = document.getElementById("numeroFibonacci").value;
    const resultado = document.getElementById("resultado3");

    if (valor.trim() === "") {
        resultado.textContent = "Debe ingresar un número.";
        return;
    }

    const n = Number(valor);

    if (!Number.isInteger(n)) {
        resultado.textContent = "Debe ingresar un número entero.";
        return;
    }

    if (n < 2 || n > 40) {
        resultado.textContent =
            "El número debe estar entre 2 y 40.";
        return;
    }

    const fibonacci = [0, 1];
    let sumaPares = 0;

    for (let i = 2; i < n; i++) {
        fibonacci.push(
            fibonacci[i - 1] + fibonacci[i - 2]
        );
    }

    for (const numero of fibonacci) {
        if (numero % 2 === 0) {
            sumaPares += numero;
        }
    }

    resultado.textContent =
        "Sucesión: " + fibonacci.join(" ") +
        " | Suma de pares: " + sumaPares;
}
