        // Selecionando os elementos do DOM
        const valor1Input = document.getElementById('valor1');
        const valor2Input = document.getElementById('valor2');
        const calculateBtn = document.getElementById('calculate-btn');
        const resultadoContainer = document.getElementById('resultado-container');
        const resultadoDiv = document.getElementById('resultado');
        const erroDiv = document.getElementById('mensagem-erro');

        // Função para mostrar/ocultar a mensagem de erro
        function mostrarErro(mensagem) {
            erroDiv.textContent = mensagem;
            erroDiv.style.display = 'block';
            resultadoContainer.style.height = '0px'; // Esconde o resultado se houver erro
        }

        // Função principal de cálculo
        function calcularSubtracaoInversa() {
            // Limpa erros e resultados anteriores
            erroDiv.style.display = 'none';
            resultadoContainer.style.height = '0px';

            const valor1String = valor1Input.value;
            const valor2String = valor2Input.value;

            // 1. Validação de campos vazios
            if (valor1String === '' || valor2String === '') {
                mostrarErro('Por favor, preencha ambos os campos.');
                return;
            }

            // 2. Conversão para número
            const valor1 = parseFloat(valor1String);
            const valor2 = parseFloat(valor2String);
            
            // 3. Validação para garantir que são números válidos
            if (isNaN(valor1) || isNaN(valor2)) {
                mostrarErro('Por favor, digite valores numéricos válidos.');
                return;
            }

            // 4. Realiza o cálculo
            const resultadoSubtracao = valor2 - valor1;

            // 5. Exibe o resultado de forma clara e formatada
            resultadoDiv.innerHTML = `
                <p class="text-sm text-green-700">O resultado da operação é:</p>
                <p class="text-xl font-bold text-green-800">${resultadoSubtracao.toFixed(2)}</p>
                <p class="text-xs text-slate-500 mt-2">(${valor2.toFixed(2)} - ${valor1.toFixed(2)})</p>
            `;

            // 6. Mostra o container do resultado com uma animação suave
            resultadoContainer.style.height = resultadoDiv.scrollHeight + 'px';
        }

        // Adiciona o evento de clique ao botão
        calculateBtn.addEventListener('click', calcularSubtracaoInversa);

        // Opcional: Permite calcular pressionando "Enter" nos campos de input
        valor1Input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateBtn.click();
            }
        });

        valor2Input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateBtn.click();
            }
        });