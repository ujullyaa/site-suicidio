import express from 'express'
import cors from 'cors'
import ajudaRoutes from './routes/ajuda'
import dadosRoutes from './routes/dados'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/ajuda', ajudaRoutes)
app.use('/dados', dadosRoutes)

app.listen(5000, () => {
  console.log('Servidor rodando em http://localhost:5000')
})

app.get('/', (req, res) => {
  res.send('API funcionando!')
})