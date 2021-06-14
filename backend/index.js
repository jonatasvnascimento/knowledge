const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./config/minddlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

const PORT = 3000
app.listen(PORT, () => {
    console.log('Backend executando...')
})
