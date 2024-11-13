function gerarNumerosAleatorios(quantidade) {
    const numeros = new Set();
    
   
    while (numeros.size < quantidade) {
        const aleatorio = Math.floor(Math.random() * 60) + 1; 
        numeros.add(aleatorio);
    }

    
    return Array.from(numeros);
}

function gerarNumeros() {
    const quantidade = 6;
    const numeros = gerarNumerosAleatorios(quantidade);
    const resultadoDiv = document.getElementById("resultado");
    
    
    resultadoDiv.innerHTML = '';

    
    numeros.forEach(numero => {
        const numeroElemento = document.createElement("div");
        numeroElemento.classList.add("numero");
        numeroElemento.textContent = numero;
        resultadoDiv.appendChild(numeroElemento);
    });
}
