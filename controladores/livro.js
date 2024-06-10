const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } = require('../servicos/livros')

function getLivros(req,res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function getLivro(req,res) {
    try{
        const id = req.params.id

        if(id && Number(id)) { //verificação de existencia da ID
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res. send('Id inválido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if(req.body.nome && req.body.id){
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro Inserido com sucesso!')
        } else {
            res.status(422)
            res.send('Não se pode inserir itens sem nome ou id!')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}
function patchLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            const body = req.body
            
            modificaLivro(body, id)
            res.send('Item modificado!')
        } else {
            res.status(422)
            res. send('Id inválido')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}
function deletaLivro(req,res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            deletaLivroPorId(id)
            res.send('Item Excluido!')
        } else {
            res.status(422)
            res.send('ID Inválido')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }    
}
module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deletaLivro
}