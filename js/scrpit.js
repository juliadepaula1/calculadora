let campoCalculo = "";

function digitar(digito) {
    const campo = document.getElementById("campoCalculo");
    const ultimoCaracter = campoCalculo.slice(-1);
    
    // Evita repetição de operadores
    if (isNaN(digito) && isNaN(ultimoCaracter) && ultimoCaracter !== "") {
        campoCalculo = campoCalculo.slice(0, -1); // Remove o último operador
    }
    
    campoCalculo += digito;
    campo.value = campoCalculo;
}

function calcular() {
    try {
        // Calcula o resultado da expressão e exibe
        const resultado = eval(campoCalculo);
        document.getElementById("campoCalculo").value = resultado;
        campoCalculo = resultado.toString(); // Mantém o resultado para nova operação
    } catch (error) {
        document.getElementById("campoCalculo").value = "Erro";
    }
}

function limpar() {
    campoCalculo = "";
    document.getElementById("campoCalculo").value = "";
}