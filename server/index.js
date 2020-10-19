const express = require('express')
const app = express()
const port = 3000
const path = require('path')
//const bodyParser = require('body-parser')


//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../client/dist')))

// app.get('/test', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
