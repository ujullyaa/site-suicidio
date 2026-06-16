import Chart from 'chart.js/auto';

Chart.defaults.color = '#cbd5e1';

fetch('http://localhost:5000/taxas')
  .then(resposta => resposta.json())
  .then(dados => {
    
    const ctxGeral = document.getElementById('taxaGeral') as HTMLCanvasElement;
    if (ctxGeral) {
      new Chart(ctxGeral, {
        type: 'line',
        data: {
          labels: dados.anos,
          datasets: [{
            label: 'Taxa Geral',
            data: dados.geral,
            borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.2)', borderWidth: 3, tension: 0.3, fill: true
          }]
        }
      });
    }

    const ctxSexo = document.getElementById('taxaSexo') as HTMLCanvasElement;
    if (ctxSexo) {
      new Chart(ctxSexo, {
        type: 'line',
        data: {
          labels: dados.anos,
          datasets: [
            {
              label: 'Masculino',
              data: dados.sexo.masculino,
              borderColor: '#3b82f6', borderWidth: 3, tension: 0.3
            },
            {
              label: 'Feminino',
              data: dados.sexo.feminino,
              borderColor: '#ec4899', borderWidth: 3, tension: 0.3
            }
          ]
        }
      });
    }

    const ctxIdade = document.getElementById('taxaIdade') as HTMLCanvasElement;
    if (ctxIdade) {
      new Chart(ctxIdade, {
        type: 'line',
        data: {
          labels: dados.anos,
          datasets: [
            { label: '15 a 19 anos', data: dados.idade['15 a 19 anos'], borderColor: '#10b981', tension: 0.3 },
            { label: '20 a 29 anos', data: dados.idade['20 a 29 anos'], borderColor: '#f59e0b', tension: 0.3 },
            { label: '30 a 39 anos', data: dados.idade['30 a 39 anos'], borderColor: '#8b5cf6', tension: 0.3 },
            { label: '60 a 69 anos', data: dados.idade['60 a 69 anos'], borderColor: '#64748b', tension: 0.3 }
          ]
        }
      });
    }

  })
  .catch(erro => console.error('Erro ao buscar taxas:', erro));