const jwt = require('jsonwebtoken')
const User = require('../db').import('../models/userModel')

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({auth: false, message: 'Invalid Credentials. Please sign in.'})
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {
            if (!err && decodeToken) {
                User.findOne({
                    where: {
                        id: decodeToken.id
                    }
                })
                .then(user => {
                    if (!user) throw err;
                    req.user = user;
                    return next();
                })
                .catch(err => next(err))
            } else {
                req.errors = err;
                return res.status(500).send('Not Authorized.')
            }
        })
    }
}
module.exports = validateSession;