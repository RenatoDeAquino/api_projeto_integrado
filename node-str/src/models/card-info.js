const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projeto = new Schema({
    image :{type:String},
    title:{type:String},
    description:{type:String},
    participants:{type:String},
    github:{type:String},
    trello:{type:String},
    video:{type:String}

})


const periodo = new Schema({
    name:{type:String},
    description:{type:String},
    projects:[projeto]
})



module.exports = mongoose.model('card-info', periodo)