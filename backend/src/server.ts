import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import validateRoute from './routes/validate'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api', validateRoute)

const PORT = 3000
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
