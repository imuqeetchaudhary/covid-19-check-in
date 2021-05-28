const validation = (schema) => async (req, res, next) => {
    const body = req.body
    try {
        await schema.validate(body, { abortEarly: false })
        next()
    } catch (err) {
        return res.json(err.errors)
    }
}

module.exports = validation