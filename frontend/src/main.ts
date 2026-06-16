import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <section class="hero">
    <div class="hero-content">
      <span class="badge">Apoio emocional 24h</span>

      <h1>Você não está sozinho</h1>

      <p class="subtitle">
        Estamos aqui para ajudar você a encontrar apoio,
        acolhimento e escuta segura.
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
        <p>
          Você não precisa enfrentar momentos difíceis sozinho.
        </p>
      </div>

      <div class="card">
        <h3>Atendimento gratuito</h3>
        <p>
          O CVV oferece apoio emocional gratuito 24 horas.
        </p>
      </div>

      <div class="card">
        <h3>Escuta segura</h3>
        <p>
          Conversas confidenciais e acolhedoras para quem precisa.
        </p>
      </div>

    </div>
  </section>

  <div style="display: flex; justify-content: center; margin-top: 40px; padding-bottom: 50px;">
    <a href="/graficos.html" style="background-color: #334155; color: #f8fafc; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-family: sans-serif; font-size: 16px;">
      📊 Ver Estatísticas e Dados
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