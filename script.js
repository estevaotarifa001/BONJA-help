document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const calculateButton = document.getElementById('calculate');
    const valueSpan = document.getElementById('value');
  
    calculateButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      const notaMaxima = parseFloat(document.getElementById('maxnote').value);
      const quantidadeQuestoes = parseInt(document.getElementById('questionsquantative').value);
      
      const notas = [];
  
      for (let i = 1; i <= 5; i++) {
        const inputId = `${i}/5`;
        const quantidade = parseInt(document.getElementById(inputId).value) || 0;
        const valor = (i * 20) / 100; // Converte 1/5, 2/5, etc., para porcentagem
        const nota = (valor * notaMaxima * quantidade) / quantidadeQuestoes;
        notas.push(nota);
      }
  
      const notaFinal = notas.reduce((total, nota) => total + nota, 0);
      valueSpan.textContent = notaFinal.toFixed(2);
    });
  });
  