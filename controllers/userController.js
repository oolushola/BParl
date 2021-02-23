const { User } = require('../models/users/user')
const { successResponse, errorResponse } = require('../handlers/statusResponse')

class UserController {
    static async getAllUsers(req, res, next) {
        const users = await User.findAll({
            attributes:[
                'id', 'lastName', 'firstName', 'email', 'createdAt'
            ]
        })
        successResponse(res, 200, users, 'successful', '')
    }

    static async getAUser(req, res, next) {
        const userId = req.params.userId;
        const users = await User.findOne({
            where:{
                id: userId
            },
            attributes: [
                'id', 'firstName', 'lastName', 'email', 'phoneNumber', 'photo'
            ]
        })
        successResponse(
            res, 200, users.dataValues, 'record found', ''
        )
    }

    static async signup(req, res, next) {
       const { firstName, lastName, photo, phoneNumber, password, email } = req.body
       const checkUser = await User.findAndCountAll({
            where: {
                email: email
            }
        })
        if(checkUser.count >= 1) {
            return errorResponse(
                res, 409, `A user with the email: ${email} already exists.`
            )
        }
        else{
            const newUser = await User.create({
                firstName: firstName,
                lastName: lastName,
                photo: photo,
                phoneNumber: phoneNumber,
                password: password,
                email: email
            })
            const newUserInfo = await User.findByPk(newUser.id)
            successResponse(
                res, 201, newUserInfo
            )
        }
    }

    static userLogin(req, res, next) {
        
    }

    static async bookHistory(req, res, next) {

    }
    
    static async userDenoucer(req, res, next) {

    }

    static async cancelAppointment(req, res, next) {

    }

    static async userAppointment(req, res, next) {

    }

    static async vendorsLog(req, res, next) {

    }
}

module.exports = UserController