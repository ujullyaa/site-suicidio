import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

const router = Router()

router.get('/', (req, res) => {
  const resultados: any[] = []

  const caminhoArquivo = path.join(
    process.cwd(),
    'data',
    'master.csv'
  )

  fs.createReadStream(caminhoArquivo)
    .pipe(csv())
    .on('data', (data) => resultados.push(data))
    .on('end', () => {
      res.json(resultados.slice(0, 200)) // Retorna apenas os primeiros 200 registros para evitar sobrecarregar a resposta
    })
    .on('error', () => {
      res.status(500).json({ erro: 'Erro ao ler CSV' })
    })
})

export default router