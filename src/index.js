const express =require('express')
const productRoute = require('./routes/user.router')

const app = express()


app.get('/', (req, res) => {
    res.send('Teste!!!!')
  })
  
app.use(express.json())

const port = process.env.PORT || 8080
app.use('/user',userRouter)
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})