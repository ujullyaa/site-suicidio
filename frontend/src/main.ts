import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <section class="hero">
    <div class="hero-content">
      <span class="badge">Apoio emocional 24h</span>
      <h1>Você não está sozinho</h1>
      <p class="subtitle">
        Estamos aqui para ajudar você a encontrar apoio, acolhimento e escuta segura.
      </p>
      <button class="btn-emergency" id="btnAjuda">
        Ligar 188 (CVV)
      </button>
    </div>
  </section>

  <section class="message-box">
    <h2>Mensagem de apoio</h2>
    <div id="mensagem">Carregando...</div>
  </section>

  <section class="cards-section">
    <div class="grid">
      <div class="card">
        <h3>Apoio emocional</h3>
        <p>Você não precisa enfrentar momentos difíceis sozinho.</p>
      </div>
      <div class="card">
        <h3>Atendimento gratuito</h3>
        <p>O CVV oferece apoio emocional gratuito 24 horas.</p>
      </div>
      <div class="card">
        <h3>Escuta segura</h3>
        <p>Conversas confidenciais e acolhedoras para quem precisa.</p>
      </div>
    </div>
  </section>

  <section class="cards-section" style="margin-top: 2rem;">
    <div class="grid">
      <div class="card" style="border-top-color: #ef4444;">
        <h3>🚨 Fique atento</h3>
        <p>Sinais como isolamento social, frases de desesperança ("eu sou um peso") e mudanças extremas de humor pedem atenção.</p>
      </div>
      <div class="card" style="border-top-color: #3b82f6;">
        <h3>🤝 Como ajudar</h3>
        <p>Ouça sem julgamentos, não minimize a dor da pessoa e incentive a busca por um profissional de saúde mental.</p>
      </div>
      <div class="card" style="border-top-color: #f59e0b;">
        <h3>⚠️ Mito vs Verdade</h3>
        <p><b>Mito:</b> "Quem avisa não faz."</p>
        <p><b>Verdade:</b> A maioria dá sinais. Toda ameaça deve ser levada muito a sério.</p>
      </div>
    </div>
  </section>

  <div class="botoes-graficos" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 50px; padding-bottom: 60px;">
    <a href="/graficos.html" style="background-color: #334155; color: #f8fafc; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; transition: 0.2s;">
      📊 Números Absolutos
    </a>
    <a href="/taxas.html" style="background-color: #0f766e; color: #f8fafc; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; transition: 0.2s;">
      📈 Taxas por População
    </a>
  </div>
`

document.getElementById('btnAjuda')?.addEventListener('click', () => {
  window.open('https://www.cvv.org.br/', '_blank')
})

fetch('http://localhost:5000/ajuda')
  .then(res => res.json())
  .then(data => {
    document.getElementById('mensagem')!.innerText = data.mensagem
  })
  .catch(() => {
    document.getElementById('mensagem')!.innerText =
      'Erro ao conectar com servidor'
  })