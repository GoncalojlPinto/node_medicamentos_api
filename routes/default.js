const express = require("express")
const router = express.Router()

router.get("/", (req, rep) => {
    rep.send("Bem vindo á nossa API de medicamentos")
})

module.exports = router