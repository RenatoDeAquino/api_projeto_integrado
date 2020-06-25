const mongoose = require('mongoose')
const Schema = mongoose.Schema



const voto = new Schema({
    project_id:{type:String},
    email:{type:String}
})




module.exports = mongoose.model('votos', voto)
