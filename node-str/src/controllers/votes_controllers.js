const mongoose = require('mongoose');
const ajuda = mongoose.model('votos');

exports.post = (req, res, next) => {
    var info = new ajuda()
    info.id = req.body.id
    info.email = req.body.email
    info.save().then(x=>{
        res.status(201).send({message: 'pessoa cadastrada com sucesso'})
    }).catch(e =>{
        res.status(400).send({
            message:"falaha ao cadastrar o produto",
            data:e
        })
    })
    
}
