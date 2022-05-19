const database = require('../database');

module.exports = {
    async index(req, res) {
        try {
            const { username, password, id, aplicacao } = req.body
            const editPassword = await database('users').update({
                usersname: username, 
                password: password,
                aplicação: aplicacao
            }).where({id: id})
            return res.json({message: 'OK'})
        } catch (error) {
            return res.json({error})
        }
    }        
};
