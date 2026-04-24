import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <header>
    <h1>Você não está sozinho</h1>
    <p>Estamos aqui para ajudar você a encontrar apoio</p>
    <button id="btnAjuda">Ligar 188 (CVV)</button>
  </header>

  <section>
    <h2>Mensagem de apoio:</h2>
    <div id="mensagem">Carregando...</div>
  </section>
`

// botão ajuda
document.getElementById('btnAjuda')?.addEventListener('click', () => {
  alert('Ligue 188 - CVV')
})

// 🔗 conexão com backend
fetch('http://localhost:5000/ajuda')
  .then(res => res.json())
  .then(data => {
    document.getElementById('mensagem')!.innerText = data.mensagem
  })
  .catch(() => {
    document.getElementById('mensagem')!.innerText = 'Erro ao conectar com servidor'
  })