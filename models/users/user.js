const Sequelize = require('sequelize')
const sequelize = require('../../handlers/db')

const User = sequelize.define('users', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        unsigned: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        allowNull: false,
        type: Sequelize.STRING
    },
    lastName: {
        allowNull: false,
        type: Sequelize.STRING
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING
    },
    userType: {
        type: Sequelize.ENUM('1', '2', '3'),
        defaultValue: 3
    },
    photo: {
        allowNull: false,
        type: Sequelize.STRING
    },
    phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
    },
    validatedAt: {
        allowNull: true,
        type: Sequelize.STRING
    }

})

module.exports = {
    User
}