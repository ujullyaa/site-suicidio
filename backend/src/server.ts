import express from 'express'
import cors from 'cors'
import ajudaRoutes from './routes/ajuda'
import dadosRoutes from './routes/dados' // Importamos o arquivo de dados apenas uma vez

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API funcionando!')
})

app.use('/ajuda', ajudaRoutes)
app.use('/dados', dadosRoutes) 
app.use(dadosRoutes) 
app.listen(5000, () => {
  console.log('Servidor rodando em http://localhost:5000')
})