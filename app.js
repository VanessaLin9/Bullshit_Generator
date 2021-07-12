const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bullshitGenerator = require('./bullshit_generator')

// const bodyParser = require('body-parser')
const bodyParser = require('body-parser')

//Template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body.occupation
  let occupation = ''
  if (options === 'engineer'){
    occupation = '工程師'
  } else if (options === 'designer'){
    occupation = '設計師'
  } else {
    occupation = '創業家'
  }

  const bullshit = bullshitGenerator(req.body.occupation)
  res.render('index', { bullshit: bullshit, occupation: occupation })
})

app.listen(port, () => {
  console.log(`Express is listen on localhost:${port}`)
})