const express = require('require')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ urlencoded: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('*', (req, res, next) => {
    res.send('Oops! Sorry, we cant find this page!')
})

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT: ${PORT}`)
})
