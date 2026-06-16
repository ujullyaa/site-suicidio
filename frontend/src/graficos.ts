import Chart from 'chart.js/auto';

Chart.defaults.color = '#cbd5e1';

fetch('http://localhost:5000/dados/estatisticas')
  .then(resposta => resposta.json())
  .then(dadosDaApi => {
    
    const ctxEvolucao = document.getElementById('graficoEvolucao') as HTMLCanvasElement;
    if (ctxEvolucao) {
      new Chart(ctxEvolucao, {
        type: 'line',
        data: {
          labels: dadosDaApi.evolucao.labels, 
          datasets: [{
            label: 'Total de Registros Oficiais',
            data: dadosDaApi.evolucao.data, 
            borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.2)', borderWidth: 3, tension: 0.3, fill: true
          }]
        }
      });
    }

    const ctxGenero = document.getElementById('graficoGenero') as HTMLCanvasElement;
    if (ctxGenero) {
      new Chart(ctxGenero, {
        type: 'pie',
        data: {
          labels: dadosDaApi.genero.labels,
          datasets: [{
            data: dadosDaApi.genero.data,
            backgroundColor: ['#3b82f6', '#ec4899', '#64748b'], borderWidth: 0
          }]
        }
      });
    }

    const ctxIdade = document.getElementById('graficoIdade') as HTMLCanvasElement;
    if (ctxIdade) {
      new Chart(ctxIdade, {
        type: 'bar',
        data: {
          labels: dadosDaApi.idade.labels,
          datasets: [{
            label: 'Casos por Faixa Etária',
            data: dadosDaApi.idade.data,
            backgroundColor: '#8b5cf6', borderRadius: 4
          }]
        }
      });
    }

    const ctxEstadoCivil = document.getElementById('graficoEstadoCivil') as HTMLCanvasElement;
    if (ctxEstadoCivil) {
      new Chart(ctxEstadoCivil, {
        type: 'doughnut',
        data: {
          labels: dadosDaApi.estadoCivil.labels,
          datasets: [{
            data: dadosDaApi.estadoCivil.data,
            backgroundColor: ['#10b981', '#f59e0b', '#fcd34d', '#ef4444', '#64748b', '#334155'], borderWidth: 0
          }]
        }
      });
    }

  })
  .catch(erro => console.error('Erro ao conectar com o back-end:', erro));