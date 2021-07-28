module.exports = (app) => {
    app.get('/api/botinfo', function (req, res) {
        res.json({
            message: "Coming Soon..."
        })
    })
}