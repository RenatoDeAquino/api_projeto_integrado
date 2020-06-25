const express = require('express')
const router = express.Router()

router.get('/',(req,res,next) =>{
    res.status(200).send({
        title: "projeto integrado",
        version: 1
    })
})

module.exports = router