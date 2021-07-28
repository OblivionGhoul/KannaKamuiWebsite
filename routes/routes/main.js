module.exports = (app) => {
    app.get('/api', function (req, res) {
        res.json({
            message: "Thank you for checking out the Kanna Kamui Bot API! Read the info below to get started.",
            docs: "Coming Soon...",
            botrepo: "https://github.com/OblivionGhoul/KannaKamuiBot",
            topgg: "https://top.gg/bot/757066313406611477"
        })
    })
}