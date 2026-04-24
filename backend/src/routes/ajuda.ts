import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    mensagem: 'Se precisar, ligue 188 (CVV). Você não está sozinho.'
  })
})

export default router