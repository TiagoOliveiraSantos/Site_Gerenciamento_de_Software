// 1. A FUNÇÃO FOI RENOMEADA PARA REFLETIR SUA NOVA FINALIDADE
function calcularSubtracaoInversa() {
    // 2. OBTER OS VALORES DOS CAMPOS DE ENTRADA (Lógica inalterada)
    let valor1String = document.getElementById('valor1').value;
    let valor2String = document.getElementById('valor2').value;

    // 3. CONVERTER OS VALORES DE TEXTO PARA NÚMERO (Lógica inalterada)
    let valor1 = parseFloat(valor1String);
    let valor2 = parseFloat(valor2String);
    
    // 4. VERIFICAR SE OS VALORES SÃO NÚMEROS VÁLIDOS (Lógica inalterada)
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return;
    }

    // 5. REALIZAR O CÁLCULO DA SUBTRAÇÃO INVERSA (valor2 - valor1)
    // A lógica anterior de média ponderada foi removida.
    let resultadoSubtracao = valor2 - valor1;

    // 6. EXIBIR O RESULTADO NA PÁGINA
    // A mensagem e a variável foram atualizadas para refletir o novo cálculo.
    // O método .toFixed(2) foi mantido para formatar o resultado com duas casas decimais.
    document.getElementById('resultado').innerHTML = "O resultado da subtração (valor2 - valor1) é: " + resultadoSubtracao.toFixed(2);
}
