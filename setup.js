module.exports = (app, express) => {
    app.set('json spaces', 1)

    app.use(express.static('public'))

    let port = process.env.PORT || 3000
    app.listen(port, function () {
        console.log('App is running, server is on port', port)
    })
}