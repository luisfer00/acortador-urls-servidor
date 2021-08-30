const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const sequelize = require('./db.js')

dotenv.config()
const PORT = parseInt(process.env.PORT) || 8080

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/url', require('./routes/url.js'))

app.listen(PORT, async () => {
  console.log(`Servidor arrancado en el puerto ${PORT}`)
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('Conexion a la base de datos exitosa')
  } catch (e) {
    console.log('No se pudo conectar a la base de datos', e)
  }
})
