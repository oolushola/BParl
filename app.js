const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const usersRoute = require('./routes/users')
const app = express()

const PORT = 3000

const sequelize = require('./handlers/db')
const { User } = require('./models/users/user')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', 'views')

const baseUrl = '/api/v1'
app.use(baseUrl, usersRoute)
app.use('*', (req, res, next) => {
    res.send('Oops! Sorry, we cant find this page!')
})

const users = User.findAll()
sequelize.sync()
.then(result => {
    return User.findByPk(1);
})
.then(user => {
    if(!user) {
        return User.create({ firstName: 'Olushola', lastName: 'Odejobi', email: 'odejobiolushola@gmail.com', password: 'Likemike009@@', photo: 'something.jpg', phoneNumber: '+2348022440810'})
    }
    return
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`SERVER LISTENING ON PORT: ${PORT}`)
    })
})
.catch(err => {
    console.log(err)
})
