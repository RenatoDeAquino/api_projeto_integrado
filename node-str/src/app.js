const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const router = express.Router()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://super:super123@projeto-integrado-xuk7s.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const info = require('./models/card-info')
const info2 = require('./models/votes')
const index = require('./routes/index_route')
const card_info = require('./routes/card_route')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: false}))


app.use('/', index)
app.use('/card-info', card_info)

module.exports = app