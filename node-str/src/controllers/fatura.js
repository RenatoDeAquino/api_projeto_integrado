const mongoose = require('mongoose');
const User = mongoose.model('card-info');
module.exports = {

    async add_project(req, res) {
        await User.findOneAndUpdate({name: req.params.name},  
            { $push: { projects: req.body.projects } } , { new: true})  //Atualiza o array
        .then(function(){
            return res.sendStatus(200)
        })
        .catch(function(err){
            console.log(err);
            return res.sendStatus(400);
        })
    },
    async mostra_project(req,res){ 
        await User.findOne({name: req.params.name})
        .then(function(usr){
            return res.json(usr.projects)
        })
        .catch(function(err){
            return res.sendStatus(400)
        })
    },

    async full_periodo(req,res){ 
        await User.findOne({name: req.params.name})
        .then(function(usr){
            return res.json(usr)
        })
        .catch(function(err){
            return res.sendStatus(400)
        })
    },
    
    async full_full(req,res){ 
        await User.find({})
        .then(function(usr){
            return res.json(usr)
        })
        .catch(function(err){
            return res.sendStatus(400)
        })
    }



}