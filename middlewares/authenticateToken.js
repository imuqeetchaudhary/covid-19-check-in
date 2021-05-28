const env = require("dotenv").config()
const jwt = require("jsonwebtoken")

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (token === null) {
        return res.sendStatus(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            res.json({
                message: "Auth Failed. Incorrect Token.",
            })
        }
        req.user = user
        console.log(user);
        next()
    })
}

module.exports = authenticateToken