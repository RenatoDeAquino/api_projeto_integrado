const mongoose = require('mongoose')
const Infos = mongoose.model('card-info')


exports.getPeriodo = (id) => {
    return Infos
        .findOne({
            id: id
        })
}

