import { getMensagem } from "../services/api"

export async function Home() {
  const data = await getMensagem()

  return `
    <section>
      <h2>Bem-vindo</h2>
      <p>${data.mensagem}</p>

      <div class="grid">
        <div class="card">
          <h3>Apoio emocional</h3>
          <p>Você não precisa passar por isso sozinho</p>
        </div>

        <div class="card">
          <h3>Ajuda gratuita</h3>
          <p>Ligue 188 - CVV 24h</p>
        </div>

        <div class="card">
          <h3>Confidencial</h3>
          <p>Seu contato é seguro</p>
        </div>
      </div>
    </section>
  `
}