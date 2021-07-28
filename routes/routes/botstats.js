const axios = require('axios')
let config = { headers: { Authorization: process.env.topgg } }
let serverCount, shardCount, numVotes

module.exports = (app) => {
    axios.get('https://top.gg/api/bots/757066313406611477', config)
    .then(function (response) {
        serverCount = response.data.server_count
        shardCount = response.data.shard_count
        numVotes = response.data.monthlyPoints
    })
    .catch(function (error) {
        console.log(error)
    })

    app.get('/api/botstats', function (req, res) {
        res.json({
            servercount: serverCount,
            shards: shardCount,
            topggVotes: numVotes
        })
    })
}