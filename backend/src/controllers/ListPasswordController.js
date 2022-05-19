const database = require('../database');

module.exports = {
    async index(req, res) {
        try {
            const results = await database('users')
            return res.json({results, message: 'OK'})
        } catch (error) {
            return res.json({error})
        }
    }        
};
