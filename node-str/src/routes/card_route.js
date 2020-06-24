const express = require('express')
var cors = require('cors')
const router = express.Router()
const controller = require ('../controllers/card_controller')
const fatura = require('../controllers/fatura')

router.post('/', cors(), controller.post)


//parte da desgraça da fatura debito
router.get("/mostra_project/:name",cors(),fatura.mostra_project);
router.post("/add_project/:name",cors(),fatura.add_project);

router.get("/Periodos/:id",cors(),controller.getPeriodo)
router.get("/fullPeriodo/:name",cors(),fatura.full_periodo)
router.get("/fullfull",cors(),fatura.full_full)




module.exports = router