/**
 * @description Method to send response in the generic format
 * @param { * } res Express Response Object
 * @param
 * @param
 * @memberof { Object } res
 */

 class response {
    /**
     * @description Successful response. This method will be 
     * invoked with a status code of either 200th category
     * 
     * @param { Object } res
     * @param { Number } code   
     * @param { Object } payload [{ Array...}] Data sent back the user
     * @param { String } description 
     * @param { String } token : (Optional)
     */

    static successResponse(res, code, payload, description, token) {
        res.status(code).json({
            status: code,
            data: payload,
            message: description,
            token: token
        })
    }

    /**
     * 
     * @description Error response log. This should invoke 
     * response status of 400 || 403 || 401 || 500 || 404 ||422 || 409
     * @param {Object} res Express response Object
     * @param {Number} code 
     * @param {String} description 
     */
    static errorResponse(res, code, description) {
        res.status(code).json({
            status: code,
            message: description
        })
    }
 }

 module.exports = response