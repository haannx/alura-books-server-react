const {Router} = require('express')
const router = Router()

const { getFavoritos, postFavorito, deletaFavorito } = require("../controladores/favorito")

router.get('/', getFavoritos)

router.get('/:id', postFavorito)

router.get('/:id', deletaFavorito)

module.exports = router