const express = require('express')
const app = express()
app.post('/',(req, res)=> {
  app.send('hey hey hey!')
})
app.use(express.static('dist'))
app.listen(4000, () => console.log('Server running on port 4000'))
