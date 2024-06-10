const {Router} = require('express')
const router = Router()
const {getLivros, getLivro, postLivro, patchLivro, deletaLivro} = require('../controladores/livro')

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deletaLivro)

module.exports = router
