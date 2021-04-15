const express =require('express')
const customersRouter = require('./routes/customers.router')

const app = express()


app.get('/', (req, res) => {
    res.send('Teste!!!!')
  })
  
app.use(express.json())
app.use('/customers',customersRouter)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})