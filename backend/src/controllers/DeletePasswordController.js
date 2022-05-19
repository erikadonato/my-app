const database = require('../database');

module.exports = {
    async index(req, res) {
        try {
            const { id } = req.params
            const deletePassword = await database('users')
            .where({
                id: id})
            .del()
            return res.json({message: 'OK'})
        } catch (error) {
            return res.json({error})
        }
    }        
};
