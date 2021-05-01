const jwt = require('jsonwebtoken')

module.exports = function Authenticate(req, res, next) {
    const token = req.header('Authorize')

    if(!token)
        return res.status(401).json({ error: true, message: "Acceso denegado" })

    try {
        const verified = jwt.verify(token, process.env.TOKEN_KEY)

        req.petOwner = verified
        next()
    }
    catch(err) {
        return res.status(400).json({ error: true, message: "Invalid token" })
    }
}