const mongoose = require('mongoose')
const Infos = mongoose.model('card-info')
const repository = require('../repositories/info_repository')

exports.post = (req, res, next) => {
    var info = new Infos()
    info.name = req.body.name
    info.image = req.body.image
    info.title = req.body.title
    info.description = req.body.description
    info.github = req.body.github
    info.trello = req.body.trello
    info.video = req.body.video
    info.votes = req.body.votes
    info.id = req.body.id
    info.email = req.body.email
    info.votos = req.body.votos
    info.save().then(x=>{
        res.status(201).send({message: 'pessoa cadastrada com sucesso'})
    }).catch(e =>{
        res.status(400).send({
            message:"falaha ao cadastrar o produto",
            data:e
        })
    })
    
}

exports.getPeriodo = (req,res,next) => {
    repository.getPeriodo(req.params.id)
    .then(data => {
        res.status(200).send(data)
    }).catch( e => {
        res.status(400).send
    })
}

