const path = require('path')
const fs = require('fs')

module.exports = (app) => {
    const readRoutes = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readRoutes(path.join(dir, file))
            } else if (file !== 'load-routes.js') {
                const route = require(path.join(__dirname, dir, file))
                console.log(`Loading Route "${file}"`)
                route(app)
            }
        }
    }

    readRoutes('.')
}