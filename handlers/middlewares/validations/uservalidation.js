const { ref } = require('joi')
const Joi = require('joi')
const { errorResponse } = require('../../statusResponse')

class userValidation {
    static validateUserSignUp(req, res, next) {
        const data = req.body
        const schema = Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email:Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            passwordRepeat: Joi.ref('password'),
            photo: Joi.string().required(),
            phoneNumber: Joi.string().required()
        })

        const validation = schema.validate(data)
        const { values, error } = validation
        if(error) {
            return errorResponse(
                res, 422, error.details[0].message.replace(/['"]/g, '')
            )
        }
        else{
            return next()
        }
    }
}

module.exports = userValidation
