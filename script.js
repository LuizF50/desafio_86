// Espera o DOM carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências aos elementos do DOM
    const palavrasInput = document.getElementById('palavrasInput');
    const ordenarBtnContainer = document.getElementById('ordenarBtnContainer');
    const resetarBtnContainer = document.getElementById('resetarBtnContainer');
    const resultadoDiv = document.getElementById('resultado');

    // Adiciona evento de clique ao botão de ordenar
    ordenarBtnContainer.addEventListener('click', function() {
        // Obtém o valor do input e remove espaços extras no início e no final
        const texto = palavrasInput.value.trim();
        
        // Verifica se o input está vazio
        if (!texto) {
            resultadoDiv.textContent = "Por favor, insira algumas palavras mágicas!";
            return;
        }
        
        // Divide a string em um array de palavras, considerando um ou mais espaços como separador
        const palavras = texto.split(/\s+/);
        
        // Ordena o array de palavras em ordem alfabética
        const palavrasOrdenadas = ordenarPalavras(palavras);
        
        // Junta as palavras ordenadas em uma única string separada por espaços
        const resultado = palavrasOrdenadas.join(' ');
        
        // Exibe o resultado na div de resultado
        resultadoDiv.textContent = resultado;
    });

    // Adiciona evento de clique ao botão de resetar
    resetarBtnContainer.addEventListener('click', function() {
        // Limpa o input e o resultado
        palavrasInput.value = '';
        resultadoDiv.textContent = '';
    });

    /**
     * Função que ordena um array de palavras em ordem alfabética
     * @param {Array} palavras - Array de palavras a serem ordenadas
     * @returns {Array} - Array de palavras ordenadas
     */
    function ordenarPalavras(palavras) {
        // Usa o método sort() para ordenar as palavras
        // O localeCompare faz a comparação considerando acentos e caracteres especiais
        return palavras.sort((a, b) => a.localeCompare(b, 'pt'));
    }

    // Adiciona um efeito de foco no input quando a página carrega
    palavrasInput.focus();
});