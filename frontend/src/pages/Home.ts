import { getMensagem } from "../services/api"

export async function Home() {
  const data = await getMensagem()

  return `
    <section class="hero">
      <div class="hero-content">
        <span class="badge">Apoio 24 horas</span>

        <h1>Você não está sozinho</h1>

        <p class="subtitle">
          Estamos aqui para oferecer acolhimento, escuta e apoio emocional.
        </p>

        <a
          href="https://www.cvv.org.br/"
          target="_blank"
          class="btn-emergency"
        >
          Ligar 188 (CVV)
        </a>
      </div>
    </section>

    <section class="message-box">
      <h2>Mensagem de apoio</h2>
      <p>${data.mensagem}</p>
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
          <h3>Ajuda gratuita</h3>
          <p>
            Atendimento gratuito e disponível 24 horas por dia.
          </p>
        </div>

        <div class="card">
          <h3>Confidencial</h3>
          <p>
            Sua conversa é segura, privada e acolhedora.
          </p>
        </div>
      </div>
    </section>
  `
}