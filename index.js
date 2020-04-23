const express = require('express')
const app = express()
app.use(express.static('dist'))
  app.get('/aws',(req, res)=> {
    app.send('aws here...!')
  })
app.listen(4000, () => console.log('Server running on port 4000'))
