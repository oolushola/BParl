const mysql = require('mysql2')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('beautyParlor', 'root', 'Likemike009@@', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false
})

module.exports = sequelize