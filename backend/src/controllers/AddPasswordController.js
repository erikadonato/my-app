const database = require('../database');

module.exports = {
    async index(req, res) {
        try {
            const { username, password, aplicacao } = req.body
            console.log(username, password, aplicacao)
            const insertUser = await database('users').insert({
                usersname: username,
                password: password,
                aplicação: aplicacao
            })
            return res.json({insertUser, message: 'Inserido com sucesso!'})
        } catch (error) {
            return res.json({error})
        }
    }        
};
