const express = require("express")
const cors = require("cors")
const axios = require('axios')
const path = require("path")

const app = express()
const cacheTime = 86400000 * 30 // the time you want

app.use(cors())
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
    
    app.get("*", (req, res)=> {
        res.sendFile(path.resolve(__dirname, "client","build", "index.html"), {maxAge:cacheTime})
    })
}

const PORT =process.env.PORT || 4000
app.listen(PORT, () =>console.log(`Listening ON PORT ${PORT}`))
